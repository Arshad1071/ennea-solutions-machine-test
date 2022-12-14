import { applyMiddleware, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"

const middleware = applyMiddleware(thunk, createLogger())
export default createStore(rootReducer, middleware);