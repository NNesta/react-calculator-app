import React, {useState, useEffect, useRef} from 'react';

function App() {
  const [value, setValue] = useState([]);
  const [result, setResult] = useState(0);
  const [first, setFirst] = useState(0);
  const [operand, setOperand] = useState('');
  const oper = useRef('')
  useEffect(() => {
      if(!oper.current){
     setFirst(value.join(''));
     setValue([]);
  }
  else if(result){
    setFirst(result);
  }
  else{
    console.log('h' ,+first, +value.join(''), oper.current)
    calculate(+first, +value.join(''), oper.current)
  }
  if(['*','/','+','-'].includes(operand)){
  oper.current = operand;}
    console.log(oper.current);
    setFirst(value.join(''))
    if(!result){
     
    }
  },[operand])
  useEffect(() => {})
  function calculate(a1,a2,op){
    if(op === '+'){
      setResult(a1+a2)
    }
    if(op === '-'){
      setResult(a1-a2)
    }
    if(op === '*'){
      setResult(a1*a2)
    }
    if(op === '/'){
      setResult(a1/a2)
    }
  }
  return(
  <div className='max-w-md mx-auto text-5xl font-semibold h-[80vh] mt-8 '>
   <div className='bg-[#7B7A89] text-white text-left h-24 py-6 border border-black'>
    <p className='text-right'>{!result?value.length?value:0:result}</p>
   </div>
   <div className='grid grid-cols-4 h-full'>
   <button value='AC' onClick={event=>{setValue([]); setResult(0);}} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>AC</button>
   <button value='+/-' onClick={event=>console.log(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>+/-</button>
   <button value='%' onClick={event=>console.log(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>%</button>
   <button value='/' onClick={event=>setOperand(event.target.value)} className='text-black inline-flex justify-center items-center bg-[#F48637] border border-black'>/</button>
   <button value={7} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>7</button>
   <button value={8} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>8</button>
   <button value={9} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>9</button>
   <button value='*' onClick={event=>setOperand(event.target.value)} className='text-black  inline-flex justify-center items-center bg-[#F48637] border border-black'>X</button>
   <button value={4} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>4</button>
   <button value={5} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>5</button>
   <button value={6} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>6</button>
   <button value='-' onClick={event=>setOperand(event.target.value)} className='text-black inline-flex justify-center items-center bg-[#F48637] border border-black'>-</button>
   <button value={1} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>1</button>
   <button value={2} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>2</button>
   <button value={3} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>3</button>
   <button value='+' onClick={event=>setOperand(event.target.value)} className='text-black  inline-flex justify-center items-center bg-[#F48637] border border-black'>+</button>
   <button value={0} onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center col-span-2 border border-black'>0</button>
   <button value='.' onClick={event=>setValue([...value, event.target.value])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>.</button>
   <button value='=' onClick={event=>setOperand(event.target.value)} className='text-black  inline-flex justify-center items-center bg-[#F48637] border border-black'>=</button>
   </div>
  </div>
  );
}

export default App;
