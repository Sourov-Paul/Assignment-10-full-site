import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({children,...rest}) => {
    const {person,isLoading}=useAuth();
    if(isLoading){
        return(
            <div className="d-flex justify-content-center spinner-border text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
)
    }
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