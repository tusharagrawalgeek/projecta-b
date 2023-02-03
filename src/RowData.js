import React, { useState } from 'react';
import './style.css';
import Details from './Details.js';
function RowData(props){
    const data=props.data;
    const [state,setState]=useState({
        showDetails:false
    });
    function handleClick(){
        setState({showDetails:!state.showDetails});
    }
    return(
        
        <>
            <div className='container'>
                <table className='table'>
                    <tr className='tr'>
                        <td className='td'>
                            {data.company.name}
                        </td>
                        <td className='td'>
                            <b>CONTACT</b>
                            <br/>
                            <br/>
                            {data.name}
                        </td>
                        <td className='td'>
                        <b>CITY</b>
                            <br/>
                            <br/>
                            {data.address.city}
                        </td>
                        <td className='td'>
                        <b>ZIP</b>
                            <br/>
                            <br/>
                            {data.address.zipcode}
                        </td>
                        <td className='td'>
                            <button className='btn-1' onClick={handleClick}>View Details</button>
                        </td>
                    </tr>
                </table>
                {state.showDetails&&<Details data={data}/>}
            </div>
        </>
    );
}
export default RowData;