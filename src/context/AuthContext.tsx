//Definir que informacion tendra el context

import React,{ createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favotireIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState ={
    isLoggedIn: false,
    username: undefined,
    favotireIcon: undefined,
}


//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: ()=> void,
    changeFavoriteIcon: (name: string) => void;
    logout: () => void;
    changeUsername: (nombre: string) => void;
}


//Crear el context
export const AuthContext = createContext({} as AuthContextProps)

//Componente proveedor del estado
export const AuthProvider =({children}:any) =>{

    const [authState, dispatch] = useReducer( authReducer , authInitialState)

    const signIn = () =>{
        dispatch({type:"signIn"})
    }

    const changeFavoriteIcon= (iconName: string) =>{
        dispatch({type:"changeFavIcon", payload: iconName})
    }

    const logout = () =>{
        dispatch({type:"logout"})
    }

    const changeUsername = (username: string) =>{
        dispatch({type:"changeUsername", payload: username})
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}