import { useDispatch } from 'react-redux';
import { augmenter, diminuer } from '../features/counter/counterSlice';
import CounterChild from './CounterChild';

function Counter(props) {
    const username = props.username;

    // je veux sélectionner la valeur actuelle de mon compteur
    // const count = useSelector((state) => state.counter.value);

    // dispatch permet d'executer des fonctions (actions) qui vont modifier
    // l'état de "count" à travers tout mes autres components
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Bonjour { username }</h2>
            <CounterChild />

            {/* Au clic du bouton, je DISPATCHE l'action d'augmenter
                mon compteur à travers tout les components */}
            <button onClick={() => dispatch(augmenter())}>
                Augmenter le compteur
            </button>
            
            {/* Au clic du bouton, je DISPATCHE l'action de diminuer
                mon compteur à travers tout les components */}
            <button onClick={() => dispatch(diminuer())}>
                Diminuer le compteur
            </button>
        </div>
    )
}

export default Counter;