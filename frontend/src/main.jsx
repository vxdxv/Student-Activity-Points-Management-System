<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '106651985831-5o1vmt5gkugtflio95623p82s3de8o39.apps.googleusercontent.com';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router> {/* Router should be at the top level */}
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider> {/* AuthProvider should be inside Router */}
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </Router>
</React.StrictMode>
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'  // Make sure this import exists

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
