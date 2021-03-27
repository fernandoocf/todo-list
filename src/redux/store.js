import {createStore} from 'redux';
import {reducer} from "./reducer";
import {applyMiddleware} from "redux";
import {loggerMiddleware} from "./middleware/logger.middleware";

const middlewareEnhancer = applyMiddleware(loggerMiddleware);

export const store = createStore(reducer, middlewareEnhancer);