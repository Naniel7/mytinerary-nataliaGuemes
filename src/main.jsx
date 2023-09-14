import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './stores/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <GoogleOAuthProvider clientId="736486887324-fj85kjuaaiibeaau0t1ol82vb63q4q6j.apps.googleusercontent.com">
    <App/>
   </GoogleOAuthProvider>
  </Provider>


)
