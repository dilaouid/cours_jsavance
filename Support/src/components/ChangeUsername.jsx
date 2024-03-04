import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../features/user/userSlice";

// ici event.target.value est la valeur de l'input
// Mais pourquoi event.target.value est la valeur de l'input ?
// event c'est l'événement qui a été déclenché, ici c'est le changement de l'input
// target c'est l'élément qui a déclenché l'événement, ici c'est l'input
// value c'est la valeur de l'input

// Donc event.target.value = valeur de l'input

function ChangeUsername() {
    const username = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    return (<>
    <label>Username</label>
    <input type="text" value={username} onChange={(event) => dispatch(setUsername(event.target.value)) } />
    </>)
}

export default ChangeUsername;