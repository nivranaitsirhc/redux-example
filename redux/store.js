import  pkg from 'redux';
const { createStore } = pkg;
import reducer from './reducer.js';

export default createStore(reducer);