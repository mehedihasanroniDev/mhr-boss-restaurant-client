import moment from "moment";
import { useEffect, useState } from "react";

const Greetings = () => {
    const [greeting, setGreeting] = useState('')

    useEffect(()=>{
        const intervalId = setInterval(()=>{
           const currentHour = moment().hour()
           updateGreetings(currentHour)
        },1000);
        return ()=> clearInterval(intervalId);
    },[])

    const updateGreetings = (currentHour) =>{
        let newGreetings = ''

        if(currentHour >= 5 && currentHour < 12 ){
            newGreetings = 'Good Morning';
        }else if(currentHour >=12 && currentHour < 18){
            newGreetings = 'Good Afternoon';
        }else{
            newGreetings = 'Good Night';
        }
        setGreeting(newGreetings)
    }

    return (
        <>
        {greeting}
        </>
    );
};

export default Greetings;