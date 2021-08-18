import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { CheckoutTable } from "../../components/checkoutTable";
import { OrderTable} from "../../components/TabOrderTable";
import { menuList } from "../../utils";

const TabOrder =({table, setUser ,menu, setMenu}) => {
    const [count, setCount]=useState([])
    const [loaded, setLoaded] = useState(false);
    const [loaded2,setLoaded2]=useState(false)
    useEffect(() => {
        menuList(setMenu)
        setLoaded(true)
    }, [loaded, setMenu])

    return (
        <div>
            
            <Link to="/seating-plan">
                <button className = "closeTabOrder" type="button">Close tab</button>                
            </Link>
            <OrderTable menu={menu} table={table} count={count} setCount={setCount} loaded2={loaded2} setLoaded2={setLoaded2}/>
            <CheckoutTable count={count} menu={menu} table={table} setCount={setCount}  loaded2={loaded2} setLoaded2={setLoaded2}/>
            <button className ="paidBtn" onClick={()=>{menu.forEach((item,index)=>{ localStorage.setItem(`table${table}${item.name}`, 0)});
             setLoaded2(false)}}>Paid</button>
        </div>
    )
};

export default TabOrder;
