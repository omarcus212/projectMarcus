import { Link, Route, useNavigate } from 'react-router-dom';
import Navbar from '../../componentes/navbar';
import Bartitle from '../../componentes/bartitle';
import InputText from '../../componentes/utils/inputText';
import ButtonSpan from '../../componentes/utils/button';
import Select from '../../componentes/utils/select';
import db from "../../firebase/firebase_config";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { isValidEmail } from '../../style/componentes/utils/validaçao';



const Cadastro = () => {

  const [ativo, setativo] = useState(false);
  const [erro, seterro] = useState(false);
  const navigation = useNavigate();

  const [usersResgister, setUsersResgister] = useState({
    nome: '',
    email: '',
    idade: '',
    dataAdmissao: '',
    datasaida: '',
    sexo: '',
    servico: '',
    ativo: ''

  })

  const validaregister = () => {

    var validate = true;

    if (!isValidEmail(usersResgister.email)) {

      seterro(true);
      validate = false

      
    }

    if(!usersResgister.nome){
      seterro(true);
      validate = false

    }
    if(!usersResgister.idade){
      seterro(true);
      validate = false

    }
    if(!usersResgister.sexo){
      seterro(true);
      validate = false

    }
    if(!usersResgister.dataAdmissao){
      seterro(true);
      validate = false

    }
    if(!usersResgister.ativo && !usersResgister.datasaida){
      seterro(true);
      validate = false

    }
   
    if(validate){setusuariosfireabse()}

  }

  let r = (Math.random() + 1).toString(36).substring(7);

  const setusuariosfireabse = async () => {

    await setDoc(doc(db, "usuarios", r), usersResgister);
    navigation('/')
  }

  const handleChange = (e) => {
    setUsersResgister({
      ...usersResgister,
      [e.target.name]: e.target.value
    })
  }
  
  const handlecheckbox = (e) => {
   
    setUsersResgister({
      ...usersResgister,
      [e.target.name]: e.target.checked
    })
    
  }

  useEffect(() => {

  }, [usersResgister])

console.log(usersResgister)
console.log(ativo)

  return (
    <div id='Cadastro'>
      <Navbar />

      <div className='container-cadastro'>
        <Bartitle text={'Cadastro de usuarios'} />

        <div className='container-input-cadastro'>
          <InputText txt={'Nome:'} onChange={handleChange} name={'nome'} value={usersResgister.nome} erro={erro} />
          <InputText txt={'Email:'} onChange={handleChange} name={'email'} value={usersResgister.email}  erro={erro}/>
          <InputText txt={'Idade:'} onChange={handleChange} name={'idade'} value={usersResgister.idade}  erro={erro}/>

          <Select txt={'Sexo:'} name={'sexo'} onChange={handleChange}  erro={erro}>
            <option selected>Selecione um tipo...</option>

            <option value="Masculino">Masculino</option>

            <option value="Feminino">Feminino</option>
          </Select>

          <Select txt={'Serviço:'} name={'servico'} onChange={handleChange}  erro={erro}>
            <option selected>Selecione um tipo...</option>

            <option value="Motorista">Motorista</option>

            <option value="Faxineiro">Faxineiro</option>

            <option value="Operador">Operador</option>

          </Select>

          <InputText txt={'Dt inical:'} type={'date'} onChange={handleChange} name={'dataAdmissao'} value={usersResgister.dataAdmissao}  erro={erro}/>


          <span className='container-inputtxt-radio'>

            <InputText txt={'Dt final:'} type={'date'} onChange={handleChange} name={'datasaida'} value={usersResgister.datasaida}  erro={erro}/>
            <InputText txt={'Atualmente?'} type={'checkbox'} onChange={handlecheckbox} name={'ativo'} value={usersResgister.ativo}  erro={erro}/>

          </span>



        </div>

        <ButtonSpan text={'Cadastrar'} onclick={validaregister} />


      </div>

    </div>

  );
}

export default Cadastro;
