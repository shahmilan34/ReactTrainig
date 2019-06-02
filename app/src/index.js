import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Employee from './components/Employee/Employee';
import Header from './components/Header/Header';

const element = (
    <div className="container-fluid">
         <Header name="Unotech Software Pvt. Ltd"/>
        <div className="row justify-content-md-center">
            <div className="panel panel-primary ">
                <div className="panel-heading ">
                   <h1> Employee </h1>
                </div>
                <div className="panel-body">
                    <Employee name="Shrinivas Ambat" profession="Software Engineer"/>
                    <Employee name="Rohit Ambre" profession="Software Engineer"/>
                    <Employee name="Milan Shah" profession="Software Engineer"/>    
                </div>             
            </div>
        </div>       
    </div>
);
ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
