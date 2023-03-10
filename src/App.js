import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import RowData from './RowData';
function App(){
  const [state,setState]=useState({data:null});
  if(state.data===null){
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res=>{
    setState(prev=>{
      return({
        ...prev,
        data:res.data
      });
    });
  })
  .catch(err=>{
    window.alert(err);
  })
  }

  if(state.data!==null){
    return(
      <>
      <div className='bg'>
        {state.data.map(i=>{
            return(
                <RowData data={i}/>
            );
          })
        }         
      </div>
    </>
    );
  }
   return(
    <>
    Data is loading...
    </>
   );
}
export default App;
