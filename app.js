import express from 'express';

const app = express();

import store from './redux/store.js';
import * as actions from './redux/actions.js';
let port            = 3000;


const unsubscribe = store.subscribe(()=>{
    console.log('Store Changed',store.getState());
})
store.dispatch(actions.bugAdded('Bug1'));

store.dispatch(actions.bugResolved(1));

store.dispatch(actions.bugRemoved(1));


app.listen(port, ()=>{
    console.log(`Redux app listening at ${port}..`);
});