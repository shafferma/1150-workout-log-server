import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import ApiProvider from '../utils/ApiProvider';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
       
     ApiProvider.post('/user/login', {
         user: { 
             username,
             password
         }
     }).then((response) => {
            props.updateToken(response.data.sessionToken)
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password} />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )

}

export default Login;