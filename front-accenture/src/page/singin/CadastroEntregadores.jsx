import React, { useState } from 'react'
import styles from './Singin.css'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { InputButton } from '../../components/InputButton'
import axios from 'axios'
import App from './../../App';
import { useNavigate } from 'react-router-dom'


export const CadastroEntregadores = () => {
    const navigate = useNavigate();

    const tipoVeiculo = ['', 'Carro', 'Moto', 'Bicicleta']
    const [emptyValue, setEmptyValue] = useState(false)

    const [form, setForm] = useState({
        email: "",
        nome: "",
        placa: "",
        senha: "",
        veiculo: "",
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
            const response = await axios.post('http://localhost:8080/entregador', form);
            console.log('Response from server:', response.data);
            setForm({
                email: "",
                nome: "",
                placa: "",
                senha: "",
                veiculo: "",
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
                        label='Como você quer ser chamado?'
                        placeholder='Digite seu nome'
                        id='nome'
                        name='nome'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["nome"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Digite seu email'
                        placeholder='example@example.com'
                        id='email'
                        name='email'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["email"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <div className='divButton'>
                        <label htmlFor="categoria">Qual seu veiculo?</label>
                        <select onChange={(e) => handleChange(e)} name="veiculo">
                            {tipoVeiculo.map((e) => {
                                return (
                                    <option>{e}</option>
                                )
                            })}
                        </select>
                    </div>
                    <>{emptyValue && form["veiculo"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Digite a placa do seu veiculo:'
                        placeholder='Se o veiculo tiver placa digite aqui'
                        id='placa'
                        name='placa'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["placa"] === "" ? <span className='valide divButton'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

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
                        divClassName='login-form-button'
                        classInputName='login-form-btn'
                        type='submit'
                        value='Confirmar'
                        placeholder='kkkk'
                        id='postSingin'
                        onClick={handlePostRequest}
                    ></Button>

                    <div className='login-form-button-register'>
                        <button className='register'>
                            <span>Já possui cadastro?</span> <Link to={'/login'} >Entrar</Link>
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}