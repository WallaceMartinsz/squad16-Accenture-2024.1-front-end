import styles from './index.css'
import googleIcon from '../../assets/google-img.svg'
import facebookIcon from '../../assets/facebook-img.svg'
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [emptyValue, setEmptyValue] = useState(false)

    const [form, setForm] = useState({
        login: "",
        senha: ""
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
            const response = await axios.post('http://localhost:8080/login', form);

            console.log('Response from server:', response.data);
            
            localStorage.setItem('userId', response.data.idCliente);

            navigate('/');
        } catch (error) {
            console.error('Error making POST request:', error);
            alert('Faça um login válido!');
        }
    };

    return (
        <div className='container'>
            <div className='container-login'>
                <form className='login-form' onSubmit={(e) => { handleSubmit(e); handlePostRequest(); }}>
                    <div className='login-form-title'>
                        <span className='title'>Acesse sua conta</span>
                    </div>

                    <Button
                        divClassName='wrap-input'
                        classInputName='input'
                        name='login' 
                        label='login:'
                        type='input'
                        placeholder='Digite seu email'
                        onBlur={(e) => handleChange(e)}
                    ></Button>

                    <Button
                        divClassName='wrap-input'
                        label='senha:'
                        name='senha'
                        classInputName='input'
                        type='password'
                        placeholder='Digite sua senha'
                        onBlur={(e) => handleChange(e)}
                    ></Button>

                    <div className='login-form-button-forgot'>
                        <button className='forgot-password'>
                            <span>Esqueceu sua senha?</span>
                        </button>
                    </div>

                    <Button
                        divClassName='login-form-button'
                        classInputName='login-form-btn'
                        type='submit'
                        value='Entrar'
                    ></Button>

                    <div className='or-divider'>
                        <span className='divider'></span>
                        <span className='or-text'>Ou continue com</span>
                        <span className='divider'></span>
                    </div>

                    <div className='social-buttons'>
                        <button className='google-btn'>
                            <img src={googleIcon} alt='Google icon' />
                        </button>
                        <button className='facebook-btn'>
                            <img src={facebookIcon} alt='Facebook icon' />
                        </button>
                    </div>

                    <div className='login-form-button-register'>
                        <button className='register'>
                            <span>Não tem conta?</span> <Link to={'/seleCad'} >Cadastre aqui!</Link>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;
