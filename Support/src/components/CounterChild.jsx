import { useSelector } from "react-redux";

function CounterChild() {

    // On va chercher la valeur actuelle de notre compteur dans le store (grâce à useSelector)
    const count = useSelector(
        (state) =>
    state.counter.value);

    // Pourquoi on dit "state.counter.value" ? Parce que dans le store, on a un "slice" qui s'appelle "counter", et dans ce slice,
    // on a une propriété qui s'appelle "value". C'est pour ça qu'on dit "state.counter.value".

    return (<p>Le compteur est à : { count }</p>) // On sait compter ??? OMGMGMGMG
}

export default CounterChild;