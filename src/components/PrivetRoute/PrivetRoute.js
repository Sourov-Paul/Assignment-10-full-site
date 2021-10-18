import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({children,...rest}) => {
    const {person}=useAuth();
    return (
        <div>
            <Route
            {...rest}
            render={({location})=>person.email?children:<Redirect
            to={{pathname:"/login", state:{from:location}}}
            ></Redirect>}
            
            
            
            >

            </Route>
        </div>
    );
};

export default PrivetRoute;