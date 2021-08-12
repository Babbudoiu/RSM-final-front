import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar';
import { createMenuEntries, menuList } from '../../utils';
import ItemsTable from '../../components/ItemsTable';

const Menu = ({setUser}) => {
    const [menu, setMenu] = useState([]);
    const [course, setCourse] = useState();
    const [dish, setDish] = useState();
    const [price, setPrice] = useState();
    const [dietary, setDietary] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        menuList(setMenu)
        setLoaded(true)
    }, [loaded])
    
    return (
        <div className="container">
        <Navbar setUser={setUser}/>
        <h2>Add menu items</h2>
        <form onSubmit={(e) => createMenuEntries(e, course, dish, price, dietary, setMenu, menu)}>
            <input 
            type="text" 
            placeholder="Course"
            onChange={(e) =>setCourse(e.target.value)} />
            <input 
            type="text" 
            placeholder="Name"
            onChange={(e) =>setDish(e.target.value)} />
            <input 
            type="number" 
            placeholder="Price"
            step=".01"
            onChange={(e) =>setPrice(e.target.value)} />
            <input 
            type="text" 
            placeholder="Suitable for..." 
            onChange={(e) =>setDietary(e.target.value)}/>
            <button type="submit">Add</button>
        </form>

        <ItemsTable menu={menu} /> 
       </div>
    )
}

export default Menu;
