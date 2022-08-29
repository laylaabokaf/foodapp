import React from 'react';
import { useState,useEffect} from "react"


export function Sale2(){
     const [value,setValue]=useState(1);
     const [select,SetSelect]=useState('usd');
     const [result,SetResult]=useState();
    function mul(){
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json',
        {method:'GET'}).then(res=>res.json().then(data=>{
            const ils=data.ils;
            for(var k in ils) {
                if(select===k){
                    SetResult(value/ils[k]*0.99);
                }
                   
            }
        
        }));
    }
    useEffect(()=>{mul()},[value,select])
    return ( 
       <div className='Sele'>
          <h1 className='titel'>Sele</h1>
             <form>
                <select name='' onChange={val=>SetSelect(val.target.value)} >
                    <option>usd</option>
                    <option>eur</option>
                </select>
                <br></br>
                <input type='number' className='input' placeholder='chaneValue' value={value} onChange={val=>setValue(val.target.value)} ></input>
                <br></br>
                <h3>{result}</h3>
             </form>
       </div>
       
    )
 };