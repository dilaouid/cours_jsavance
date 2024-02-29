import axios from "axios";
import { useState, useEffect } from "react";

function TestAPI () {
    const [ data, setData ] = useState(null);
    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                // La promesse est résolue, on a reçu une réponse
                setData(response.data);
            })
            .catch(error => {
                // La promesse a été rejetée, on a une erreur
                console.error(error);
            })
            .finally( () => {
                // La promesse est terminée, que ce soit en succès ou en erreur
                console.log("C'est fini");
            });
    }, [] );

    if (data == null)
        return (<p>Chargement en cours...</p>);

    return (
        <ul>
            {
                // On boucle sur notre tableau de données, on utilise la méthode map (HOF) pour retourner un tableau de <li>
                data.map( (element, index) => {
                    // En gros ca veut dire : pour chaque élément de mon tableau, je retourne un <li> avec le nom de l'élément
                    return (<li key={index} >{ element.name }</li>) 
                    // à quoi ca sert l'attribut "key" ? C'est pour aider React à identifier les éléments qui ont changé,
                    // été ajoutés ou supprimés. Donc obligatoire quand on fait des boucles sur des tableaux, essayez de le retirer,
                    // vous verrez que React va vous afficher un warning dans la console.
                })
            }
        </ul>
    )

}

export default TestAPI;