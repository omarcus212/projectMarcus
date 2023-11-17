import Bartitle from "../bartitle";
import InputText from "../utils/inputText";
import Select from "../utils/select";


const Modal = () => {
    const a = 'Usuario : marcus';
    return (
        <div id="container-Modal">
            <div className='container-cadastro'>
                <span> <Bartitle text={a} /></span>

                <div className="pr-div-input">

                    <InputText txt={'Nome:'} />
                    <InputText txt={'Email:'} />
                    <InputText txt={'Idade:'} />
                    <InputText txt={'Sexo:'} />
                    <Select txt={'Serviço:'} />
                    <InputText txt={'Dt inical:'} type={'date'} />

                    <span className='container-inputtxt-radio'>
                        <InputText txt={'Dt final:'} type={'date'} />
                        <InputText txt={'Atualmente?'} type={'checkbox'} />

                    </span>
                </div>



            </div>

        </div>

    );
}

export default Modal;
