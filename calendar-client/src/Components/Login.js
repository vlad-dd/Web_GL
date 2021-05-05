import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div>
            <img class="image" src="http://www.cfdesigner.com/codepen/rocket-page-logo.png" alt="rocket-image" />
            <form className="login_form d-table mr-auto ml-auto w-500px bg-light">
                <h2>Log in</h2>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={props.updateInput} type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={props.updateInput} type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <Link to='/register' className="d-block">Don't have an account? Register here...</Link>

                <button type="submit" className="btn btn-primary" onClick={props.tryLogin}>Submit</button>
            </form>
        </div>
    );
}

export default Login;