//! arttir butonuna tiklandigi zaman counterSonuc un 1 artmasini istiyoruz.
//! 1.step button icerisine onClick icerisinde dispatch ile arttir functionuna ulas. functionlara ulasmak useDispatch()
//! 2.step useDispatch ile counterActions.js file icerisindeki tetiklenen function icerisindeki type ve payload parametreleri ile counterReducer.js icerisindeki action a eris.
//! 3.step action.type ve action.payload ile counterActions.js deki functionun özelliklerini counterReducer da gör...
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { arttir, azalt, resetle } from "../../redux/actions/counterActions";

const Counter = () => {
  const count1 = useSelector((state) => state.counterReducer.counterSonuc);
  const yazi = useSelector((state) => state.counterReducer.text1);

  const dispatch1 = useDispatch();

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{count1} </h1>
      <h2>{yazi} </h2>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch1(arttir())}
        >
          ARTTIR
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch1(resetle())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch1(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;
