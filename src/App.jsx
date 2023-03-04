import React, { useState } from "react";

function App() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState("");
  const [prev, setPrev] = useState(null);
  const calculate = (op) => {
    if (prev === null || first === null) {
      console.log(prev, first);
      setFirst(+second);
      setSecond("");
      setPrev(op);
      return;
    }
    console.log(prev);
    switch (prev) {
      case "+":
        setFirst(first + +second);
        break;
      case "-":
        setFirst(first - +second);
        break;
      case "*":
        setFirst(first * +second);
        break;
      case "/":
        setFirst(first / +second);
        break;
    }
    setPrev(op);
    setSecond("");
  };
  return (
    <div className="max-w-md mx-auto text-5xl font-semibold h-[80vh] mt-8 ">
      <div className="bg-[#7B7A89] text-white text-left h-24 py-6 border border-black">
        <p className="text-right">{second || first}</p>
      </div>
      <div className="grid grid-cols-4 h-full">
        {[
          { id: 1, value: "AC" },
          { id: 2, value: "+/-" },
          { id: 3, value: "%" },
          { id: 4, value: "/" },
          { id: 5, value: 7 },
          { id: 6, value: 8 },
          { id: 7, value: 9 },
          { id: 8, value: "*" },
          { id: 9, value: 4 },
          { id: 10, value: 5 },
          { id: 11, value: 6 },
          { id: 12, value: "-" },
          { id: 13, value: 1 },
          { id: 14, value: 2 },
          { id: 15, value: 3 },
          { id: 16, value: "+" },
          { id: 17, value: 0 },
          { id: 18, value: "." },
          { id: 19, value: "=" },
        ].map((item, index) => (
          <button
            key={index}
            value={item.value}
            onClick={(event) => {
              const input = event.target.value;
              switch (input) {
                case "=":
                  calculate("+");
                  break;
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
                  break;
                default:
                  setSecond((prev) => prev + input);
              }
            }}
            className={`text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black ${
              item.id == 17 && "col-span-2"
            } ${[4, 8, 12, 16, 19].includes(item.id) && "bg-[#F48637]"}`}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
