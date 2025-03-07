import React from 'react';
import './Item_css.css';
export default function Item({ id, name, image }) {
    return (
        <div className="boder">
            <img height="100px" width="100%" src={image} />
            <div className="title-infor">
                <p>{name}</p>
                <img
                    height="20px"
                    width="20px"
                    src="https://res.cloudinary.com/dqlzcgear/image/upload/v1741177081/Icon_Button_73_g4khgt.png"
                    alt=""
                />
            </div>
        </div>
    );
}
