import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from '../context/myContext';
import { v4 as uuidv4 } from 'uuid';


const AddFuzzyForm = () => {
    const { 
        myNewFuzzy, 
        addMyNewFuzzy, 
        setMyNewFuzzy, 
        setAddMyNewFuzzy, 
        handleMyFuzzy 
    } = useContext(MyContext);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (myNewFuzzy.name && myNewFuzzy.description) {
            const uniqueId = uuidv4();
            setAddMyNewFuzzy([...addMyNewFuzzy, {...myNewFuzzy, id: uniqueId}]);
            setMyNewFuzzy({
                name: '',
                description: ''
            })
            navigate('/');
        }
        else {
            alert("incomplete form");
        }
    }
  return (
    <div>
    AddFuzzyForm
    <form onSubmit={handleSubmit}>
        <label htmlFor="fuzzy_name">
        Fuzzy Name:   
        </label>
        <input 
            type="text" 
            value={myNewFuzzy.name}
            onChange={(e) => handleMyFuzzy(e)}
            name="name"
        />
        <label htmlFor="fuzzy_description">
        Fuzzy Description:
        </label>
        <textarea 
            value={myNewFuzzy.description}
            onChange={(e) => handleMyFuzzy(e)}
            name="description"
        />
        <button
        >
        Add New Fuzzy
        </button>
    </form>
    </div>
  )
}
export default AddFuzzyForm