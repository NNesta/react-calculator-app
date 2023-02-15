import React, {useState, useEffect} from 'react';

function App() {
  const [value, setValue] = useState('')
  const [variables, setVariables] = useState([])
  useEffect(()=>{
   setVariables(prevVariables=>[...prevVariables, value].filter(x=>x!==''))
  },[value])
  const calculate=()=>{
    const values = variables.join('').split(/[\+\-\\\*]/g);
    const operand = variables.join('').spilt.split(/\d/g);
    console.log(values)
    console.log(operand)
  }
  return (
    
  <div className='max-w-md mx-auto text-4xl font-bold h-[80vh] mt-8 '>
   <div className='bg-[#7B7A89] text-white text-left h-24 py-6'>
    <p className='text-right'>{Array.isArray(variables)?!variables.length?0:variables:variables}</p>
   </div>
   <div className='grid grid-cols-4 h-full'>
   <button value='AC' onClick={event=>setVariables([])} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>AC</button>
   <button value='+/-' onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>+/-</button>
   <button value='%' onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>%</button>
   <button value='/' onClick={event=>setValue(event.target.value)} className='text-black inline-flex justify-center items-center bg-[#F48637] border border-black'>/</button>
   <button value={7} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>7</button>
   <button value={8} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>8</button>
   <button value={9} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>9</button>
   <button value='*' onClick={event=>setValue(event.target.value)} className='text-black  inline-flex justify-center items-center bg-[#F48637] border border-black'>X</button>
   <button value={4} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>4</button>
   <button value={5} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>5</button>
   <button value={6} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>6</button>
   <button value='-' onClick={event=>setValue(event.target.value)} className='text-black inline-flex justify-center items-center bg-[#F48637] border border-black'>-</button>
   <button value={1} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>1</button>
   <button value={2} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>2</button>
   <button value={3} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>3</button>
   <button value='+' onClick={event=>setValue(event.target.value)} className='text-black  inline-flex justify-center items-center bg-[#F48637] border border-black'>+</button>
   <button value={0} onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center col-span-2 border border-black'>0</button>
   <button value='.' onClick={event=>setValue(event.target.value)} className='text-black bg-[#DCDBDC] inline-flex justify-center items-center border border-black'>.</button>
   <button value='=' onClick={()=>{calculate();setVariables(eval(variables.join('')))}} className='text-black  inline-flex justify-center items-center bg-[#F48637] border border-black'>=</button>
   </div>
  </div>
  );
}

export default App;
