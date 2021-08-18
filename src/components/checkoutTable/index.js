import React, { useEffect, useState } from "react";

export const CheckoutTable = ({
  menu,
  count,
  setCount,
  loaded2,
  setLoaded2,
  table,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(0);
    let holder = 0;
    menu.map((item, index) => {
      holder = holder + item.price * count[index];

      setTotalPrice(holder);
      let local = Number.parseInt(
        localStorage.getItem(`table${table}${item.name}`)
      );
      if (Number.isInteger(local)) {
        let holder = count;
        holder[index] = local;
        setCount(holder);
      } else {
        let holder = count;
        holder[index] = 0;
        setCount(holder);
      }
      return local;
    });

    setLoaded2(true);
  }, [loaded2, count, menu, setCount, setLoaded2, table]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td> Dish/Drinks </td>
            <td> Price </td>
            {/* <td> Extra Notes</td>
            <td></td> */}
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) => {
            if (count[index] > 0) {
              return (
                <tr>
                  <td>{`${item.name} * ${count[index]}`} </td>
                  <td>£{item.price * count[index]} </td>
                  {/* <td>
                    <input
                      className="logInput"
                      onChange={(e) =>
                        localStorage.setItem(
                          `notes${table}${item.name}`,
                          e.target.value
                        )
                      }
                      placeholder={"extra notes"}
                    />{" "}
                  </td>
                  <td> </td>
                  <td>{localStorage.getItem(`notes${table}${item.name}`)} </td> */}
                </tr>
              );
            } else {
              return null;
            }
          })}
          <tr>
            <td>Total Price</td>
            <td>£{totalPrice} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
