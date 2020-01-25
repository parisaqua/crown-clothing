import React from 'react';
import './sign-in.styles.scss';
import SignInAndSignUp from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


class SignIn extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sing-in' >
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required 
                    />
                    <label>EMail</label>
                    <input 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required 
                    />
                    <label>Password</label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default SignIn;