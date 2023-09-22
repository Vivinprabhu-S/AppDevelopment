//UseContext API
//manage state globally pass values to child components

import { Children, createContext , useContext , useMemo , useState} from "react";

const UserContext = createContext();

const useUser = () => {
    return UserContext(UserContext);
}

export const useProvider = () => {
    const[isUserLoggedIn , setIsUserLoggedIn] = useState(false);

    const login = () => {
        setIsUserLoggedIn(true);
    }
    const logout = () => {
        setIsUserLoggedIn(false);
    }

    const userValue = useMemo(()=>(
        {
            isUserLoggedIn, login , logout
        }
    ),[isUserLoggedIn]);

    return(
        <UserContext.Provider value={userValue}>
            {Children}
        </UserContext.Provider>
    )
}