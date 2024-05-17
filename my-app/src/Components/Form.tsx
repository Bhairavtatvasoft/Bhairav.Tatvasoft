import React, { useState } from 'react'
import { FormData } from '../Models/Form';
import { ApiResponse } from '../Models/APIResponse';


export default function Form() {
    const [inputPostCode1,setinputPostCode1]=useState('');
    const [inputPostCode2,setinputPostCode2]=useState('');
    const [responseData,setresponseData]=useState('')
    const handleSubmit = async(e:any) => {
        e.preventDefault();
        
        const response = await fetch(
            `https://media.carecontrolsystems.co.uk/Travel/JourneyPlan.aspx?Route=${inputPostCode1},${inputPostCode2}`
          )
            .then((res) => {
              return res.text();
            })
            .then((res) => {
                setresponseData(res)
            });
        


      };
  return (
    <>
    <h2>{responseData}</h2>
    <form onSubmit={handleSubmit} className="postcode-form">
    <div className="form-group">
      <label>Postcode 1:</label>
      <input
        type="text"
        value={inputPostCode1}
        onChange={(e) => setinputPostCode1(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label>Postcode 2:</label>
      <input
        type="text"
        value={inputPostCode2}
        onChange={(e) => setinputPostCode2(e.target.value)}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
  <table>

  </table>
    </>
  )
}