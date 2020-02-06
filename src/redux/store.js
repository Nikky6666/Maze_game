import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import mazeReducer from "./mazeReducer";
import thunkMiddleWare from 'redux-thunk'

const rootReducer = combineReducers({
    maze: mazeReducer
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))


window.store = store;

export default store;