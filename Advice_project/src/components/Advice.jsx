import { useEffect, useState } from 'react'
import '../css/Advice.css'

const Advice = () => {

  const [advice,setAdvice]=useState("");
  const [count,setCount]=useState(0);
  const [loading,setLoading]=useState(false);
  async function getadvice(){
      setLoading(true);
      const res=await fetch("https://api.adviceslip.com/advice");
      const data =  await res.json()
      setAdvice(data.slip.advice);
      setCount(count+1);
      setLoading(false);
  }

  useEffect(function () {
    getadvice();
  },[]);
  return (
    <>
      <h2>{advice}</h2>
      <button onClick={getadvice} disabled={loading}>Get Advice</button>
      <p>You have read <b>{count}</b> pieces of advice</p>
    </>
  )
}

export default Advice




