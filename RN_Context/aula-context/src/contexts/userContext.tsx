import { createContext } from "react";

//contexto
export const UserContext = createContext({})

//provider
export default function UserContextProvider({children} : any){
    const contextValue = {nome: "Andressa"};
    
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}