import React from 'react';
import './App.css';
import Routes from "./Routes"

//Store
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}

export default App;
