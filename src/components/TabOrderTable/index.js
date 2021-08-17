import React,{useEffect} from "react";

export const OrderTable = ({ menu, table, count, setCount, loaded2, setLoaded2 }) => {
 
 
   
      useEffect(()=>{
        menu.map((item, index) => {   
   
      let local = Number.parseInt(
          localStorage.getItem(`table${table}${item.name}`)
        );              
        if (Number.isInteger(local)) {
          let holder = count
          holder[index]=local
          setCount(holder)
        } else {
          let holder = count
          holder[index]=0
         setCount(holder)
      
        }
      })
      setLoaded2(true)
      },[loaded2])
    
  return (
    
      
          <table className="items-table" >
            <thead>
              <tr>
                
                <td>Item</td>
               
                <td>Add</td>
                <td>Remove</td>
               
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => {
                    
        return (
              <tr key={index}>
               
                <td>{item.name}</td>
                
                <td>
                  <button
                    onClick={() => {
                      let holder = count
                        holder[index] = holder[index] +1
                        setCount(holder)
                        localStorage.setItem(`table${table}${item.name}`, holder[index]);
                        setLoaded2(false)
                    }}
                  > + </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                   
                      let holder = count
                      if (holder[index] !== 0) {
                        holder[index] = holder[index] -1
                        setCount(holder)
                        
                      } else {
                        holder[index] = 0
                        setCount(holder)
                        
                      }
                      localStorage.setItem(`table${table}${item.name}`, holder[index]);
                      
                      setLoaded2(false)
                    }}
                  > - </button>
                </td>
                
              </tr>)})}
            </tbody>
          </table>
        
      
    
  )
}
