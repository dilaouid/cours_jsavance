import axios from "axios";
import { useState, useEffect } from "react";

function TestAPI () {
    const [ data, setData ] = useState(null);
    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally( () => {
                console.log("C'est fini");
            });
    }, [] );

    if (data == null)
        return (<p>Chargement en cours...</p>);

    return (
        <ul>
            {
                data.map( (element, index) => {
                    return (<li key={index} >{ element.name }</li>)
                })
            }
        </ul>
    )

}

export default TestAPI;