import { useState } from "react";

function Counter(props) {
    const username = props.username;
    const [ count, setCount ] = useState(0);

    function diminuer () {
        setCount(count - 1);
    }

    function augmenter () {
        setCount(count + 1);
    }


    return (
        <div>
            <h2>Bonjour { username }</h2>
            <p>Le compteur vaut: { count }</p>
            <button onClick={augmenter}>Augmenter le compteur</button>
            <button onClick={diminuer}>Diminuer le compteur</button>
        </div>
    )
}

export default Counter;