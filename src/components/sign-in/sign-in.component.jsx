import React, {useState} from 'react';
import './sign-in.styles.scss';
//--Import Components------------------
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} label="Email" required/>
                <FormInput handleChange={e => setPassword(e.target.value)} type="password" name="password" value={password} label="Password" required/>
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignIn
