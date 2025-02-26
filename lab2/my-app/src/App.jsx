import { useState } from "react";
import Button from "./assets/components/Button";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = (operator) => {
    let kq;
    switch (operator) {
      case "+":
        kq = num1 + num2;
        break;
      case "-":
        kq = num1 - num2;
        break;
      case "*":
        kq = num1 * num2;
        break;
      case "/":
        kq = num2 !== 0 ? num1 / num2 : "Lỗi chia cho 0";
        break;
      default:
        kq = "Lỗi";
    }
    setResult(kq);
  };

  return (
    <>
      <div className="calculator">
        <input
          type="text"
          placeholder="Nhập số thứ nhất"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <br />
        <input
          type="text"
          placeholder="Nhập số thứ hai"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>

      <div>
        <br />
        <Button label="+" onClick={handleCalculate} />
        <Button label="-" onClick={handleCalculate} />
        <br />
        <Button label="*" onClick={handleCalculate} />
        <Button label="/" onClick={handleCalculate} />
        <br />
      </div>

      <h2>Kết quả: {result}</h2>
    </>
  );
}

export default App;
