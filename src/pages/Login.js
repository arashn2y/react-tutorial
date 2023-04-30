import Header from "../components/Header";
import { RxDashboard } from 'react-icons/rx';
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailBorderColor, setEmailBorderColor] = useState("border-gray-100");
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordBorderColor, setPasswordBorderColor] = useState("border-gray-100");

    const emailChangeHandler = (event) => {
        const userInput = event.target.value;
            setEmailBorderColor('border-gray-100');
            setEmailError('');
        setEmail(userInput);
    }

    const passwordChangeHandler = (event) => {
        const userInput = event.target.value;
            setPasswordBorderColor('border-gray-100');
            setPasswordError('');
        setPassword(userInput);
    }

    const clickHandler = () => {
        if(email.length === 0){
            setEmailBorderColor('border-red-500');
            setEmailError('almeno una lettera');
        }
        if(password.length < 8) {
            setPasswordBorderColor('border-red-500');
            setPasswordError('almeno 8 lettere');
        }
        if(email.length === 0 || password.length < 8) {
            return;
        }
    
        console.log(email, password);
        navigate('/dashboard');
    }

    return (
        <>
        <Header title="Feedback UI" icon={<RxDashboard />} link='/dashboard' />
        <main className="w-full flex flex-col justify-center items-center relative">
        <div className="w-full flex justify-center items-center p-1">
      <div className="w-11/12 md:w-4/5 lg:w-2/5 flex flex-col p-8 mt-10 mb-5 border-2 border-gray-100 rounded-sm shadow-dark">
        <div>
          <div className={`w-full flex justify-center items-center p-1 mt-4 rounded-md border-2 ${emailBorderColor}`}>
            <Input text={email} onChange={emailChangeHandler} placeholder="Email..." type="text" />
          </div>
          <div className="text-red-500 font-semibold h-3 mt-2 text-center">{emailError}</div>
        </div>
        <div>
          <div className={`w-full flex justify-center items-center p-1 mt-4 rounded-md border-2 ${passwordBorderColor}`}>
            <Input text={password} onChange={passwordChangeHandler} placeholder="password..." type="password" />
          </div>
          <div className="text-red-500 font-semibold h-3 mt-2 text-center">{passwordError}</div>
        </div>
        <div className={`w-full flex justify-center items-center p-1 mt-4 rounded-md`}>
            <Button text='Sing In' onClick={clickHandler} />
          </div>
      </div>
    </div>
        </main>
        </>
    )
}

export default Login;