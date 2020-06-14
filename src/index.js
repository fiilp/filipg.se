import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {hydrate} from 'react-dom';
import App from './app';
import './index.css';
hydrate(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));
