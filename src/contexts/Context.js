import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
    allReservations :JSON.parse(localStorage.getItem("allReservations")) || null,
}

export const Context = createContext(INITIAL_STATE);



export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user));
    },[state.user])

   useEffect(() => {
        localStorage.setItem("allReservations", JSON.stringify(state.allReservations));
    },[state.allReservations]) 

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                allReservations : state.allReservations,
                dispatch,
            }}>
            {children}
        </Context.Provider>
    )
}

