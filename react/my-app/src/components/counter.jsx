import { useState } from "react";
const [counter, setCounter] = useState(1);
const [price, setPrice] = useState(1000);

function Increment() {
    if (counter < 10) {
        setCounter((prevValue) => prevValue + 1);
        setPrice(1000 * (counter + 1)); 
    }
}
function Decrement() {
    if (counter > 1) {
        setCounter((prevValue) => prevValue - 1);
        setPrice(1000 * (counter - 1));
    }
  }