/*----------------------------------------------------------------------------
|
| Module Details: Change
|
| Name: Change
|
| Purpose: 
|
| Date      	Name Ver. Comments
| --------- ------- ----- ----- -----------------------------------------
| 22-August-22 	Daher $$1 Created  
----------------------------------------------------------------------------*/


import React from 'react';
import { useState } from "react"
import { Sele } from './Sele';
import { Buy } from './Buy';

export function Change(){
    const [modallsOpen,SetModallsOpen]=useState(false);

    function ChangeSele(){
        SetModallsOpen(true);
    } 
    function ChangeBuy(){
        SetModallsOpen(false);
    }

    return (
        <div>
            <button className='Sele'  onClick={ChangeSele}>Sele</button>
            <button className='Buy' onClick={ChangeBuy}>buy</button>
            {modallsOpen? <Sele/>:<Buy/>}
        </div>
    );
}