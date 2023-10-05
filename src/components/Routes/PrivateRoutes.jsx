/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../ContextProvider/ContextProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthProvider)
    const location = useLocation()

    if(loading){
        return <p>Loading...</p>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;