import { useState } from "react";



const Card = ({ nome, Email, Sexo, idade, Servico, Data_ini, Data_fin, ativo, icon }) => {

     console.log(ativo)
    return (
        <div className="container-Card">
            <span className="spannome"> <h1>{nome}</h1></span>

            <div className="container-Card_pt1">
                <span className="spantext"> Email:  <h3>{Email}</h3></span>
                <span className="spantext"> Sexo:  <h3>{Sexo}</h3></span>
                <span className="spantext"> Idade:  <h3>{idade}</h3></span>
            </div>

            <div className="container-Card_pt2">

                <div className="container-Card-txt_pt2">
                    <span className="spantext"> Servico:  <h3>{Servico}</h3></span>
                    <span className="spantext"> Data de Admissão:  <h3>{Data_ini}</h3></span>
                    <span className="spantext"> Data saida:  <h3>{Data_fin}</h3></span>
                </div>

                <div className="container-Card_icon">
                    <span className="spanicon">

                        {icon == 'Motorista' &&

                            <img src={'https://firebasestorage.googleapis.com/v0/b/solucao-it.appspot.com/o/Motorista.png?alt=media&token=02c9aa4e-833d-4625-82fa-c1b83a0de610'} />
                        }
                        {icon == 'Faxineiro' &&


                            <img src={'https://firebasestorage.googleapis.com/v0/b/solucao-it.appspot.com/o/faxineiro.png?alt=media&token=1dc3804c-907f-40d9-90f5-1dae303d5e81'} />

                        }
                        {icon == 'Operador' &&


                            <img src={'https://firebasestorage.googleapis.com/v0/b/solucao-it.appspot.com/o/operador.png?alt=media&token=61f83198-0235-4734-83d4-3e505fd7826e'} />

                        }

                    </span>
                    <span className="ativo_span">Ativo:  
                        <img src={ativo ? 
                          'https://firebasestorage.googleapis.com/v0/b/solucao-it.appspot.com/o/verdadeiroV.png?alt=media&token=586f65ce-af00-48bd-a162-bd9f17355341'
                        : 'https://firebasestorage.googleapis.com/v0/b/solucao-it.appspot.com/o/falsoX.png?alt=media&token=45256460-3309-4823-8e04-abf0e8d572b3'} /> 
                        </span>
                </div>

            </div>
        </div>
    );
}

export default Card;
