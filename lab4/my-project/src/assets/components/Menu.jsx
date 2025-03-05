import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Menu() {
    const [arr, setArr] = useState([]); 
    const url = "https://67c83d350acf98d070858d3b.mockapi.io/a";

    useEffect(() => {

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setArr(data);  
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []); 

    return (
        <div>
            <ul>
                {arr.map((e, index) => (
                    <li key={index}>
                        <Item id={index} name={e.name} image={e.img} /> 
                    </li>
                ))}
            </ul>
        </div>
    );
}
