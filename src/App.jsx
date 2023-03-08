import { useState } from "react";
import data from "./data";

const App = () => {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState("");
  const [prev, setPrev] = useState(null);

  const calculate = (operator) => {
    if (prev === null || first === null) {
      setFirst(+second);
      setSecond("");
      setPrev(operator);
      return;
    }
    switch (prev) {
      case "+":
        setFirst(first + Number(second));
        break;
      case "-":
        setFirst(first - Number(second));
        break;
      case "*":
        setFirst(first * Number(second));
        break;
      case "/":
        setFirst(first / Number(second));
        break;
      case "%":
        setFirst(second / 100);
        break;
      case "=":
        break;
      default:
        setFirst(0);
    }
    setPrev(operator);
    setSecond("");
  };
  const handleClick = (event) => {
    const input = event.target.value;
    switch (input) {
      case "+":
        calculate("+");
        break;
      case "/":
        calculate("/");
        break;
      case "*":
        calculate("*");
        break;
      case "-":
        calculate("-");
        break;
      case "AC":
        setSecond("");
        setFirst(0);
        setPrev(null);
        break;
      case "+/-":
        setSecond((prev) => -prev);
        break;
      case "=":
        calculate("=");
        break;
      default:
        setSecond((prev) => prev + input);
    }
  };
  return (
    <div className="max-w-md mx-auto text-5xl font-semibold h-[80vh] mt-8 ">
      <div className="bg-[#7B7A89] text-white text-left h-24 py-6 border border-black">
        <p className="text-right">{+second || +first}</p>
      </div>
      <div className="grid grid-cols-4 h-full">
        {data.map((item, index) => (
          <button
            key={index}
            value={item.value}
            onClick={handleClick}
            className={`text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black ${
              item.id === 17 && "col-span-2"
            } ${[4, 8, 12, 16, 19].includes(item.id) && "bg-[#F48637]"}`}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
