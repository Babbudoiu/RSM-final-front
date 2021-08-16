import React,{useEffect, useState} from "react";

export const OrderTable = ({ menu, table }) => {
   

    
  return (
    <div>
      {menu.map((item, index) => {
          let count
         
            let local = Number.parseInt(
                localStorage.getItem(`table${table}${item.name}`)
              );              
              if (Number.isInteger(local)) {
                count = local
              } else {
                 count = 0
              }
              
         
          
        return (
          <table className="items-table" key={index}>
            <thead>
              <tr>
                <td>Course</td>
                <td>Item</td>
                <td>Price</td>
                <td>Add</td>
                <td>Remove</td>
                <td>Count</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.course}</td>
                <td>{item.name}</td>
                <td>£{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      
                        count = count + 1;
                        localStorage.setItem(`table${table}${item.name}`, count);
                        console.log(count)
                    }}
                  > + </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                   

                      if (count !== 0) {
                        count = count - 1;
                        
                      } else {
                        count = 0;
                      }
                      localStorage.setItem(`table${table}${item.name}`, count);
                      console.log(count)
                    }}
                  > - </button>
                </td>
                <td>{count}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
