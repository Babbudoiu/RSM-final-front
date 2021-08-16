import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { OrderTable} from "../../components/TabOrderTable";
import { menuList } from "../../utils";

const TabOrder =({table, setUser ,menu, setMenu}) => {
   
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        menuList(setMenu)
        setLoaded(true)
    }, [loaded])

    return (
        <div>
            
            <Link to="/seating-plan">
                <button type="button">Close tab</button>                
            </Link>
            <OrderTable menu={menu} table={table}/>
        </div>
    )
};

export default TabOrder;
