import React from "react";
import {
    Link, useNavigate
} from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
           <img src={require("../components/img/logo.png")} alt="logo" className="logo" />
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/Add">Add Product</Link></li>
                <li><Link to="/Update">Update Product</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link onClick={Logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>

            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div >
    );
}

export default Nav;
