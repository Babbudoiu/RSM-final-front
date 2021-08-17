import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { createMenuEntries, menuList, deleteCourse } from '../../utils';
import ItemsTable from '../../components/ItemsTable';

const Menu = ({setUser, menu ,setMenu}) => {
 
    const [course, setCourse] = useState();
    const [dish, setDish] = useState();
    const [price, setPrice] = useState();
    const [dietary, setDietary] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        menuList(setMenu)
        setLoaded(true)
    }, [loaded, setMenu])
    
    return (
        <div className="container">
            <div className="children-container">
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
            <button className="menuBtn" type="submit">Add</button>
            <button className="menuBtn" type="button"
            onClick={() => {
                deleteCourse(course, dish)
                setLoaded(false)
            }}>Delete</button>
        </form>

        <ItemsTable menu={menu} /> 
       </div>
       <Footer />
       </div>
    )
}

export default Menu;
