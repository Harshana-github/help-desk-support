import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { techPeopleListReducer } from './reducers/techPeopleReducer'
import { ticketCreateReducer, ticketListReducer } from './reducers/ticketReducer'


const reducer = combineReducers({
  techPeopleList: techPeopleListReducer,
  ticketsList: ticketListReducer,
  ticketCreate: ticketCreateReducer,
})

const initialState = {
    
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
