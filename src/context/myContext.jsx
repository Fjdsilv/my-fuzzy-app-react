import { useState, createContext } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [myNewFuzzy, setMyNewFuzzy] = useState({
        name: '',
        description: ''
    });
    const [addMyNewFuzzy, setAddMyNewFuzzy] = useState([]);

    const handleMyFuzzy = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setMyNewFuzzy({...myNewFuzzy, [name]: value})
    }

    return (
        <MyContext.Provider value={
            {
                myNewFuzzy,
                addMyNewFuzzy,
                setMyNewFuzzy,
                setAddMyNewFuzzy,
                handleMyFuzzy
            }
        }
        >
        {children}
        </MyContext.Provider>
    )
}

export { MyProvider, MyContext }