import { useState, useMemo } from 'react';

function App_useMemo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);

    function fn(num) {
        console.log('Tính toán chậm...');
        for (let i = 0; i < 1000000000; i++) {
            num += i;
        }
        console.log('Tính xong');
        return num * 2;
    }

    //  Dùng useMemo để chỉ chạy lại khi number thay đổi
    const result = useMemo(() => fn(number), [number]);

    return (
        <div>
            <h2>Kết quả: {result}</h2>
            <button onClick={() => setCount(count + 1)}>
                Tăng Count {count}
            </button>
            <button onClick={() => setNumber(number + 1)}>Tăng Number</button>
        </div>
    );
}

export default App_useMemo;
