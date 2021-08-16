import React from "react";

const ItemsTable = ({menu}) => {
    return(
        <div>
             {menu.map((item,index) => {
                 return (
                    
                    <table className="items-table" key={index}>
                    <thead>
                        <tr>
                        <td>Course</td>
                        <td>Item</td>
                        <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{item.course}</td>
                        <td>{item.name}</td>
                        <td>£{item.price}</td>
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