import React, {useState, useEffect, useRef} from 'react';
const math = require('mathjs');

function App() {
  const [result, setResult] = useState(0);
  const [operand, setOperand] = useState('+');
  const [first, setFirst] = useState(0);
  const [value, setValue] = useState([])
  const onMount = useRef(false)
  const oper = useRef()
  useEffect(()=>{
    if(onMount.current){
      console.log(first, +value.join(''))
    setResult(calculate(+first, +value.join(''), oper.current))
    oper.current=operand;
    setFirst(result);
    console.log("there", result);
    }
    else{
      onMount.current=true;
    }
  },[operand])
  const calculate =(first, second, operand)=>{
    switch(operand){
      case '+':
        return first+second
      case '-':
        return first-second
      case '*':
        return first*second
      case '/':
        return first/second
      default:
        return 0
    }
  }
  return(
  <div className='max-w-md mx-auto text-5xl font-semibold h-[80vh] mt-8 '>
   <div className='bg-[#7B7A89] text-white text-left h-24 py-6 border border-black'>
    <p className='text-right'>{!result?value.length?value:0:result}</p>
   </div>
   <div className='grid grid-cols-4 h-full'>
{    [
      {id: 1, value: 'AC'},
      {id: 2, value: '+/-'},
      {id: 3, value: '%'},
      {id: 4, value: '/'},
      {id: 5, value: 7},
      {id: 6, value: 8},
      {id: 7, value: 9},
      {id: 8, value: '*'},
      {id: 9, value: 4},
      {id: 10, value: 5},
      {id: 11, value: 6},
      {id: 12, value: '-'},
      {id: 13, value: 1},
      {id: 14, value: 2},
      {id: 15, value: 3},
      {id: 16, value: '+'},
      {id: 17, value: 0},
      {id: 18, value: '.'},
      {id: 19, value: '='}].map((item, index)=><button key={index} value={item.value}  onClick={event=>{ if(event.target.value=="=") {setValue([math.evaluate(value.join(""))])} else {setValue(prev=>prev.concat(event.target.value))}}} className={`text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black ${item.id==17&&"col-span-2"} ${[ 4,8,12,16,19].includes(item.id)&&"bg-[#F48637]"}`}>{item.value}</button>)
    }
   </div>
  </div>
  );
}

export default App;
