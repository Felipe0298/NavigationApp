//Definir que informacion tendra el context

import React,{ createContext } from "react";

export interface AuthState{
    ifLoggedIn: boolean;
    username?: string;
    favotireIcon?: string
}

//Estado inicial
export const authInitialState: AuthState ={
    ifLoggedIn: false,
    username: undefined,
    favotireIcon: undefined
}


//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: ()=> void
}


//Crear el context
export const AuthContext = createContext({} as AuthContextProps)

//Componente proveedor del estado
export const AuthProvider =({children}:any) =>{
    return(
        <AuthContext.Provider value={{
            authState:authInitialState,
            signIn:()=> {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}