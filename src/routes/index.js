import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/home";
import Cadastro from "../pages/cadastro";


const Routing = () => {



    return (
        <BrowserRouter>
            <Routes>
                <Route  path={'/'} element={<Home/>} />
                <Route path={'/Cadastro'} element={<Cadastro/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routing