import React from "react";


const ItemsTable = ({ menu }) => {
  return (
    <div>
      <table className="items-table">
        <thead>
          <tr>
            <td>Course</td>
            <td>Item</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.course}</td>
                <td>{item.name}</td>
                <td>£{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

};

export default ItemsTable;
