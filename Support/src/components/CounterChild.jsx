import { useSelector } from "react-redux";

function CounterChild() {
    const count = useSelector(
        (state) =>
    state.counter.value);
    return (<p>Le compteur est à : { count }</p>)
}

export default CounterChild;