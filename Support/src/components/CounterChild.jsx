import { useSelector } from "react-redux";

function CounterChild() {
    const count = useSelector((state) => state.counter.value);

    return(<p>La valeur du compteur est: { count }</p>)
}

export default CounterChild;