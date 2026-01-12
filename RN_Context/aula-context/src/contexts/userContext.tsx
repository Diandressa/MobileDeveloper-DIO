import { createContext } from "react";

//tipagem
interface UserContextProps {
    nome: string;
}

//contexto
export const UserContext = createContext<UserContextProps | undefined>(undefined)

//provider
export default function UserContextProvider({children} : any){
    const contextValue = {nome: "Andressa"};

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

