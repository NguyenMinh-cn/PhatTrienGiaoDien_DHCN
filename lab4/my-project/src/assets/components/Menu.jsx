import React, { useState, useEffect } from 'react';
import Item from './Item';
import './Menu_css.css';
export default function Menu() {
    const [arr, setArr] = useState([]);
    const url = 'https://67c83d350acf98d070858d3b.mockapi.io/a';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setArr(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="menu-container">
            {arr.map((e, index) => (
                <Item key={index} id={index} name={e.name} image={e.img} />
            ))}
        </div>
    );
}
