import Button from '@mui/material/Button';
import React,{ useState } from 'react';
 
const User = () => {
    let [data,setData] = useState(0);
    
    function updateData(){
     setData(data+1);
    }
    function updateMinus(){
        
            setData(data-1  );
        
       
    }
    
   return (
    <div className='App'>
        
        <Button variant="contained" onClick={updateData}>Update</Button>
        <h1>{data}</h1>
        <Button variant="contained" onClick={updateMinus}>Minus</Button>
        </div>

  );
}

export default User;