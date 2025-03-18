import { useState } from 'react';

export default function App_useState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Giá trị: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
        </div>
    );
}
