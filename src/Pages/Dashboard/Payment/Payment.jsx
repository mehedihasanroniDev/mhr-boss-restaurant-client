import { Elements } from "@stripe/react-stripe-js";
import MenuHeaderTitle from "../../../Components/MenuHeaderTitle/MenuHeaderTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Helmets from "../../../Components/Helmets/Helmets";

const stripePromise = loadStripe('pk_test_51OfyjEGfEaIuVj89x9VVlSAAaXDGEwVqqXxWUYNM1o4Xd5wY1Ad8hxdX1jcO4zxLqxYaRgNsrn6RrlG7cOeoooj400L674KREy')
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk_test_api)

const Payment = () => {
    return (
        <div>
            <Helmets title={'Payment'} />
            <MenuHeaderTitle title={'Payment'}/>

            <Elements stripe={stripePromise}>
                <div className="w-1/2 mx-auto mt-20">

                <CheckoutForm/>
                </div>
            </Elements>
        </div>
    );
};

export default Payment;