import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginScreen } from './components/login/LoginScreen';
import { ProyectScreen } from './components/proyects/ProyectScreen';
import { UserScreen } from './components/users/UserScreen';
import { TaskScreen } from './components/tasks/TaskScreen';

ReactDOM.render(

    <BrowserRouter>
    <Routes>

      <Route path="/" element= { <App />} >
      <Route path="login" element= { <LoginScreen />} />
      <Route path="proyect" element= { <ProyectScreen />} />
      <Route path="user" element= { <UserScreen />} />
      <Route path="task" element= { <TaskScreen />} />
      </Route>
    </Routes>
   
    </BrowserRouter>,

  document.getElementById('root')
);

