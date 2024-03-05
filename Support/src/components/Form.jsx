import { useState } from 'react';
import axios from 'axios';

function Form() {
    const [ form, setForm ] = useState({
        title: '',
        body: ''
    });
    const [ success, setSuccess ] = useState(false);

    // event.target.title -> n'existe pas
    
    // event.target.name => référence à l'input title
    // event.target.value => valeur de l'input title
    // et même chose pour event.target.body

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((prevState) => ({
            // Spread operator pour copier tout les éléments de prevState qui ne
            // sont pas modifiés dans l'appel de cette fonction
            ...prevState,
            [name]: value
            // Pour accéder à une propriété d'un objet qui est égal au contenu d'une variable
            // on utilise les crochets [] à savoir [name] peut faire référence à title ou body par exemple
            // https://github.com/dilaouid/cours_jsavance/blob/main/J01/7%20-%20Spread%20operator.md
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // empêcher le comportement par défaut d'un élement (ici à savoir, le formulaire qui refresh la page)

        // axios.post(url, data à envoyer)
        // (pareil que GET, sauf que cette fois ci il y a une donnée à envoyer, à savoir le form (state))
        axios.post('https://jsonplaceholder.typicode.com/posts', form)
            // la promesse est tenue
            .then(response => {
                console.log(response.data);
                setForm({
                    title: '',
                    body: ''
                }) // je reinitialise mon formulaire avec des inputs vides
                setSuccess(true);
            })

            // la promesse est rompue
            .catch(error => {
                console.error(error)
            })
    }

    return(
    <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor='title'>Titre</label>
        <input type="text" id="title" name="title" value={form.title} onChange={(event) => handleChange(event)} placeholder='Titre du post' />

        <label htmlFor='body'>Contenu</label>
        <input type="text" id="body" name="body" value={form.body} onChange={(event) => handleChange(event)}  placeholder='Contenu du post' />
        <button type="submit">Envoyer</button>
        { success && <span>Super ca a bien envoyé</span> }
        { /* Si success est vrai, alors on affiche le span, sinon on ne l'affiche pas */ }
        { /* Les valeurs falsy sont : false, 0, '', null, undefined, NaN */}
        { /* Les valeurs truthy sont : tout le reste */}
    
    </form>)
}

export default Form;

/* Pour récapituler :
-> Les valeurs de notre formulaires sont stockées dans un state form
-> On a un formulaire html assez classique
-> Les inputs, au moment d'un changement de valeur, passe par la fonction handleChange
-> Cette fonction va mettre notre state form à jour avec seulement la valeur/name qui nous intéresse (destructuring)
-> On clique sur submit du formulaire, comportement classique html, ca va executer la fonction onSubmit de mon form
-> Celle ci, handleSubmit, va empêcher le comportement natif d'un formulaire (à savoir, refresh une page)
-> Va envoyer une requête POST à notre API, avec comme donnée les valeurs de notre state form
-> C'est passé niquel, on console log le resultat, et on mets notre state success à true
-> Sinon bah il se passe rien juste un console error de l'erreur

*/