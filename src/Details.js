import React from "react";
import './style.css';
function Details(props){
    const data=props.data;
    var state="State",country="Country";
    return(
        <>
        <div className="details-container">
            <h4>Description</h4>
            <p>
                {data.company.catchPhrase+" and "+data.company.bs+"."}
            </p>
            <table className="details-table">
                <tr className="details-row">
                    <th className="details-left">
                        Contact Person
                    </th>
                    <th className="details-right">
                        Address
                    </th>
                </tr>
                <tr>
                    <td className="details-left">
                        {data.name}
                    </td>
                    <td className="details-right">
                        {data.address.street+", "+data.address.suite+", "+data.address.city+", "+data.address.zipcode}
                    </td>
                </tr>
                <tr className="details-row">
                    <th className="details-left">
                        Website 
                    </th>
                    <th className="details-right">
                        City
                    </th>
                </tr>
                <tr>
                    <td className="details-left">
                        {data.website}
                    </td>
                    <td className="details-right">
                        {data.address.city}
                    </td>
                </tr>
                <tr className="details-row">
                    <th className="details-left">
                        E-mail
                    </th>
                    <th className="details-right">
                        State
                    </th>
                </tr>
                <tr>
                    <td className="details-left">
                        {data.email }
                    </td>
                    <td className="details-right">
                        state
                    </td>
                </tr>
                <tr className="details-row">
                    <th className="details-left">
                        Phone
                    </th>
                    <th className="details-right">
                        Country
                    </th>
                </tr>
                <tr>
                    <td className="details-left">
                        {data.phone.split(' ')[0]}
                    </td>
                    <td className="details-right">
                        Country
                    </td>
                </tr>
            </table>
        </div>
        </>
    );
}
export default Details;