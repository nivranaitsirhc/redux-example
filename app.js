import express from 'express';

const app = express();

import store from './redux/store.js';

let port            = 3000;


const unsubscribe = store.subscribe(()=>{
    console.log('Store Changed',store.getState());
})
store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Bug1'
    }
})

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
})

app.listen(port, ()=>{
    console.log(`Redux app listening at ${port}..`);
});