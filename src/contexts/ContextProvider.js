import React, {useState, useContext} from "react";

const AppContext = React.createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifications: false,
}

export const AppProvider = ({children}) => {

    const [isClicked, setIsClicked] = useState(initialState)
const [activeMenu, setActiveMenu] = useState(true)
const [screenSize, setScreenSize] = useState(undefined)

const handleClick = (clicked) => {
    setIsClicked({...initialState, [clicked]: true});
}


return(
    <AppContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize}}>
        {children}
    </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return (
useContext(AppContext)
    )
}