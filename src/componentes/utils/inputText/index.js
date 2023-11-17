


const InputText = ({ txt, placeholder, value,name, type, onChange,erro }) => {
    return (
        <div className="container-input">
            <p>{txt}</p>
            <div className={erro?'error':'input'}>
                <input placeholder={placeholder} name={name} onChange={onChange} type={type} value={value}></input>
            </div>
        </div>
    );
}

export default InputText;
