
import React, { useState } from 'react'; 
import Square from './Square';

const ColoredSquare =({number})=>{
    const isEvenNumber = number % 2 === 0;
    return <Square style={{ background: isEvenNumber? 'red' : 'green' }} />;
};

const MemoizedColoredSquare = React.memo(
    ColoredSquare,
    (prevProps, nextProps) => (prevProps.number % 2) === (nextProps.number % 2),
);

export default function FeaturePage() {
    const [number, setNumber] = useState(0);
    return (
        <>
    <input
        type="number"
        value={number}
        onChange={event => setNumber (event.target.value)}
        />    
        <MemoizedColoredSquare number={number} />
    </>
    );
}