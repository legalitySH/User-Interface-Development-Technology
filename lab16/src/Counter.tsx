import React, { useState } from "react";
import Button from "./Button";
import '../src/index.css';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(6);
    
    let styleObj =
    {
        color : 'red';
        fontFamily : 'initial';
    }
    return (
        <div className="container">
            <p className="score" style={count < 5 ? {'color' : 'rgb(3, 142, 255)'} :  {'color' : 'rgb(255, 21, 21)'}}>{count}</p>
            <div className="buttons">
                <Button title="inc" callback={() => {setCount(count => count + 1);} } disabled={count === 5} />
                <Button title="reset" callback={() => setCount(0)} disabled={count === 0} />
            </div>
        </div>
    );
};

export default Counter;