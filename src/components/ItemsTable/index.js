import React from "react";
import { menuList } from "../../utils";

const ItemsTable = ({menu}) => {
    return(
        <div>
             {menu.map((item,index) => {
                 return (
                    <table key={index}>
                    <thead>
                        <tr>
                        <td>course</td>
                        <td>item</td>
                        <td>price</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{item.course}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                    </tbody>
                    </table> 
                 )
             }) 
}
        </div>
    )
};

export default ItemsTable;