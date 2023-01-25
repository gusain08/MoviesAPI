import Button from '@mui/material/Button';
import React,{ useState } from 'react';
 
const User = () => {
    let [data,setData] = useState(1);
    let [minusdata,setMinsData] = useState(0);
    function updateData(){
     setData(data+1);   
    }
    function oneData(){
        setMinsData(minusdata-1);
    }
   return (
    <div className='App'>
        <h1>{data}</h1>
        
        <div>
        <Button variant="contained" onClick={updateData}>Update</Button>
    </div>
        <h1>{minusdata}</h1>
        <Button className="MuiButton-textInherit" variant="contained" onClick={oneData}>Minus</Button>
    </div>
  );
}

export default User;