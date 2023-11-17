import { Link, Route, useNavigate } from 'react-router-dom';
import Card from '../../componentes/utils/card';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import db from "../../firebase/firebase_config";
import ButtonSpan from '../../componentes/utils/button';
import Navbar from '../../componentes/navbar';
import { useEffect, useState } from 'react';
import Cadastro from '../cadastro';



const Home = () => {
    const [users, setUsers] = useState([])
    const [ativo, setativo] = useState(false)
    const navigation = useNavigate();

    const docRef = collection(db, "usuarios");
    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(docRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUser();



    }, []);




    console.clear();
    return (
        <div id='Home'>
            <Navbar text={'Lista'} />


            {
                users.map((user) => {
                    return (
                        <Card nome={user.nome} Email={user.email} Sexo={user.sexo} idade={user.idade} Servico={user.servico} Data_ini={user.dataAdmissao} Data_fin={user.datasaida} ativo={user.ativo} icon={user.servico} />
                    )
                })
            }

            <ButtonSpan text={'add + '} onclick={() => { navigation('/Cadastro') }} />
        </div>

    );
}

export default Home;
