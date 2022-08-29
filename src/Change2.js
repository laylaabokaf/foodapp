import React from "react";
import {useState} from "react" ;
import Buy from "./Buy"
import { Sale2 } from "./Sale2";

function Change(){
  const [modallsOpen,SetModallsOpen]=useState(false);

  function ChangeSele(){
      SetModallsOpen(true);
  } 
  function ChangeBuy(){
      SetModallsOpen(false);
  }

  return (
      <div>
          <button className='Sale'  onClick={ChangeSele}>Sale</button>
          <button className='Buy' onClick={ChangeBuy}>buy</button>
          {modallsOpen? <Sale2/>:<Buy/>}
      </div>
  );
}

export default Change;