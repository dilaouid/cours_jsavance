import { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
    const [ posts, setPosts ] = useState(null);
    useEffect(() => {
        // Requête api sur jsonplaceholder (méthode get) -> utilisation d'axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // Promise tenue
            .then(response => {
                setPosts(response.data);
            })
            // Promise rompue
            .catch(err => {
                console.error(err);
            })
            // Promise terminée
            .finally(() => {
                console.log("Requête terminée");
            })
    }, []);
    if (posts == null) {
        // Si jamais l'appel API n'est pas fini, on affiche un message de chargement
        return (<p>Chargement en cours ...</p>)
    }
    return(
    <ul>

        {/* HOF map pour itérer dans le tableau posts et créer des éléments dynamiquement */}
        { posts.map((post, index) => {
            // key -> prop obligatoire lorsqu'on génére des éléments en itérant
            return (<li key={index}>{ post.title }</li>)
        }) }
    </ul>)
}

export default Posts;

// jsonplaceholder.typicode.com/posts