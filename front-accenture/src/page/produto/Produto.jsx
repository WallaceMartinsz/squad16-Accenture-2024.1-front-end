import React, { useState } from 'react'
import styles from './Produto.css'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
const categorias = ['', 'Cozinha', 'Banheiro', 'Acessorios', 'Lembranças', 'Roupas para bebês', 'Roupas', 'Brechó']
export const Produto = () => {

    const [emptyValue, setEmptyValue] = useState(false)

    const [form, setForm] = useState({
        nome: "",
        preco: "",
        quantidade: "",
        descricao: ""
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
            const userId = localStorage.getItem('userId');
            const response = await axios.post(`http://localhost:8080/produtos/cliente/${userId}`, form);
            console.log('Response from server:', response.data);
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    };

    return (
        <div className='container'>
            <div className='container-login'>
                <form className='login-form' onSubmit={(e) => { handleSubmit(e) }}>
                    <div className='login-form-title'>
                        <span className='title'>Agora nos informe os dados do produto</span>
                    </div>

                    <div>
                        <label htmlFor="categoria">O que você quer anunciar?</label>
                        <select onChange={(e) => handleChange(e)} name="categoria">
                            {categorias.map((e) => {
                                return (
                                    <option>{e}</option>
                                )
                            })}
                        </select>
                    </div>
                    <>
                        <div> {emptyValue && form['categoria'] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ''}</div>
                    </>

                    <Button
                        divClassName='wrap-input divButton'
                        classInputName='input'
                        label='Nome do produto:'
                        placeholder='Digite o nome do produto'
                        id='nome'
                        name='nome'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["nome"] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Preço:'
                        placeholder='00,00'
                        id='preco'
                        type='number'
                        name='preco'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["preco"] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Quantidade'
                        placeholder='Digite quantos produtos serão anunciados'
                        id='quantidade'
                        name='quantidade'
                        type='number'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["quantidade"] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Descrição'
                        placeholder='Digite a descrição do produto'
                        id='descricao'
                        name='descricao'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["descricao"] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>
                    

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
            </div>
        </div>
    )
}
