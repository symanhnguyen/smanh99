import React from "react";

const Clothes = (props) => {
    console.log(props) 
    return (
        <div>
            <h1>{props.children}</h1>
            <ul>
                <li><b>Ten:</b>{props.name}</li>
                <li><b>Mau:</b>{props.color}</li>
                <li><b>Kieu:</b>{props.type}</li>
                <li><b>Kich co:</b>{props.size}</li>
            </ul>
            <hr></hr>
        </div>
    )
}
export default Clothes;