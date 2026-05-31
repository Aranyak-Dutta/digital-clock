import { useState, useEffect } from "react";

export default function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(() => setTime(new Date()), 1)
    
        return () =>
            clearInterval(interval);
    }, []);

    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds= time.getMilliseconds();

    const merdian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const padZero1 = (number) =>{
        if (number < 10){
            return "0" + number;
        }
        else{
            return number;
        }
    }

    const padZero2 = (number) => {
        if (number < 100){
            if (number < 10){
                return "00" + number;
            }
            else{
                return "0" + number
            }
        }else{
            return number;
        }
    }

    return (
        <div className="clock-wrap">
            <div className="clock-inner">
                <header id="digital-clock">Digital Clock</header>
                <p id="para">{padZero1(hours)} <span className="sep tick">:</span> {padZero1(minutes)} <span className="sep tick">:</span> {padZero1(seconds)} <span className="sep">:</span> <span className="ms">{padZero2(milliseconds)}</span> <span className="meridian">{merdian}</span></p>
                <footer id="last">© {new Date().getFullYear()} ARANYAK DUTTA. All Rights Reserved.</footer>
            </div>
        </div>
    );
}