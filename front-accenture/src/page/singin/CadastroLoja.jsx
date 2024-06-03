import React, { useState } from 'react'
import styles from './Singin.css'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { InputButton } from '../../components/InputButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CadastroLojas = () => {
    const navigate = useNavigate();


    const [emptyValue, setEmptyValue] = useState(false)

    const [form, setForm] = useState({
        nome: "",
        endereco: "",
        senha: "",
        especialidade: "",
        cnpj: ""
    })

    const handleChange = (e) => {
        let newProp = form
        newProp[e.target.name] = e.target.value
        setForm({ ...newProp })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let emptyValues = Object.values(form).some(obj => obj === "")
        setEmptyValue(emptyValues)

    }

    const handlePostRequest = async () => {
        try {
            const response = await axios.post('http://localhost:8080/lojas', form);
            console.log('Response from server:', response.data);
            setForm({
                nome: "",
                endereco: "",
                senha: "",
                especialidade: "",
                cnpj: ""
            });
            navigate('/login')
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    };

    return (
        <div className='container'>
            <div className='container-login'>
                <form className='login-form' onSubmit={(e) => { handleSubmit(e) }}>
                    <div className='login-form-title'>
                        <span className='title'>Cadastre-se aqui</span>
                    </div>

                    <Button
                        divClassName='wrap-input divButton'
                        classInputName='input'
                        label='Como sua loja se chama'
                        placeholder='Digite o nome da loja:'
                        id='nome'
                        name='nome'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["nome"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Endereço da loja:'
                        placeholder='Ex.: Rua Jose de Alencar 522 - Boa vista-Recife'
                        id='endereco'
                        name='endereco'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["endereco"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Digite sua senha:'
                        placeholder='*********'
                        type='password'
                        id='senha'
                        name='senha'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["senha"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Especialidade da loja:'
                        placeholder='Qual o segmento da sua loja'
                        id='especialidade'
                        name='especialidade'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["especialidade"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='CPF/CNPJ:'
                        placeholder='Apenas números'
                        id='cnpj'
                        name='cnpj'
                        type='number'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["cnpj"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>


                    <Button
                        divClassName='login-form-button'
                        classInputName='login-form-btn'
                        type='submit'
                        value='Confirmar'

                        id='postSingin'
                        onClick={handlePostRequest}
                    ></Button>

                    <div className='login-form-button-register'>
                        <button className='register'>
                            <span>Já possui cadastro?</span> <Link to={'/login'} >Entrar</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
