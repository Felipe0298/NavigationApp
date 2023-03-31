import { AuthState } from "./AuthContext";

type AuthAction = 
| { type: "signIn"}
| { type: "logout"}
| { type: "changeFavIcon", payload: string}
| { type: "changeUsername", payload: string}



export const authReducer = (state: AuthState, action:AuthAction): AuthState =>{

    switch (action.type) {
        case "signIn":
            return{
                ...state,
                isLoggedIn:true,
                username:"no-username-yet",
                
            }

            case "changeFavIcon":
            return{
                ...state,
                favotireIcon: action.payload
            }
            
            case "logout":
                return{
                    ...state,
                    username: undefined,
                    favotireIcon: undefined,
                    isLoggedIn:false
                }
                
            case "changeUsername":
                return{
                    ...state,
                    username: action.payload
                }
        default:
            return state
    }

}