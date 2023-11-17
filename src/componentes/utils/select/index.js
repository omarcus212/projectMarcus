import React from "react";


const Select = (props) => {
    return (
        <div className="container-input">
            <p>{props.txt}</p>
            <div className={props.erro?'error':'input'}>
                <select className="input" value={props.value} {...props} onChange={props.onChange}>
                {props.children}
                </select>

                
            </div>
        </div>
    );
}





export default Select