import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// not HOC
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// HOC component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h1>THis is private info! Please don't share...</h1>}
            <WrappedComponent {...props} />
        </div>
        
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to see the details</p> }
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const container = document.getElementById('app');
const root = createRoot(container); 
// root.render(<AdminInfo isAdmin={true} info="Here is the info" />);
root.render(<AuthInfo isAuthenticated={false} info="Here is the info" />);
