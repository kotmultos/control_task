import React, {useState} from 'react';

import NavBar from "../../modules/navigation/NavBar";
import LoginForm from "../../components/loginForm/loginForm";

import './Admin.css'

const Admin = () => {
    const [isEntered, setIsEntered] = useState(false);

    return (
        <div>
            <NavBar/>
            {!isEntered && <LoginForm setFunc={setIsEntered}/> }
            {isEntered && <addNewForm/>}

        </div>
    );
};

export default Admin;