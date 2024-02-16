import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import './checkoutForm.css'
import './checkoutForm.css'
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [transactionId, setTransactionId] = useState('');
    const {user} = useAuth()
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret, setClientSecret ]= useState('')
    const stripe = useStripe();
    const elements = useElements()
    const axiosSecure = useAxiosSecure();
    const {cart, refetch} = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const totalPrices = totalPrice.toFixed(3);




    useEffect(() => {
        if (totalPrices > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrices })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrices])

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)

        if(card == null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        });
        if(error){
            console.log('payment error', error);
            setPaymentError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setPaymentError('')
        }
        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if(confirmError){
            console.log('Confirm Error');
        }
        else{
            console.log('payment intent', paymentIntent);

            if((paymentIntent.status === 'succeeded')){
                setTransactionId(paymentIntent.id);

                  // now save the payment in the database
                  const payment = {
                    email: user.email,
                    price: totalPrices,
                    transactionId: paymentIntent.id,
                    date: new Date(), 
                    cartIds: cart.map(id => id._id),
                    menuItemIds: cart.map(id=> id.menuId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                if (res.data?.paymentResult?.insertedId) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }

            }

        }

    }
    return (
        <>
        <div className="text-center font-bold font-cinzel text-3xl my-5">Total Prices: ${totalPrices}</div>
        <form onSubmit={handleSubmit}>
            <div className="card-element-container">

            <CardElement
                options={{
                style: {

                    base: {
                    fontSize: '20px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#000',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            </div>
            <div className="mx-auto w-fit my-6">

            <button type="submit" className="btn btn-info " disabled={!stripe || !clientSecret}>
                Pay
            </button>
            </div>
            <p className="text-xl font-semibold text-error">{paymentError}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
        </>
    );
};

export default CheckoutForm;