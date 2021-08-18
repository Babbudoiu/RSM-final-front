export const fetchAdmin = async (e, username, password, setAdmin) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_END}admin/${username}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: password,
        }),
      }
    );
    const data = await response.json();
    setAdmin(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = async (e, username, password, setUser) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_END}users/${username}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: password,
        }),
      }
    );
    const data = await response.json();

    localStorage.setItem("MyToken", data.token);

    setUser(data.user.name);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (e, username) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_END}users/${username}`,
      {
        method: "Delete",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const createUsers = async (e, username, password, role, setUser) => {
  e.preventDefault();
  try {
    const response = await fetch(`${process.env.REACT_APP_BACK_END}users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: username,
        role: role,
        password: password,
      }),
    });
    const data = await response.json();
    setUser(data.user.name);
  } catch (error) {
    console.log(error);
  }
};

export const authUser = async (setUser) => {
  if (localStorage.MyToken) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACK_END}users`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("MyToken")}` },
      });
      const data = await response.json();
      setUser(data.name);
    } catch (error) {
      console.log(error);
    }
  }
};

export const createBooking = async (
  e,
  firstName,
  surname,
  groupSize,
  phoneNumber,
  date,
  index,
  index2
) => {
  try {
    e.preventDefault();

    const day = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;

    const response = await fetch(
      `${process.env.REACT_APP_BACK_END}bookings/${day}`
    );

    const data = await response.json();

    const booking = [[firstName], [surname], [groupSize], [phoneNumber]];
    if (data.targetBookings === null) {
      let dayArray = [
        [
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
        ],
        [
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
        ],
      ];

      dayArray[index2][index][0] = booking;

      const response2 = await fetch(
        `${process.env.REACT_APP_BACK_END}bookings`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            day: day,
            dayArray: dayArray,
          }),
        }
      );
      const data2 = await response2.json();
      console.log(data2)
    } else if (data.targetBookings) {
      const entry = data.targetBookings.dayArray[index2][index];
      if (entry[0] === null) {
        entry[0] = booking;
      } else {
        entry.push(booking);
      }

      const response2 = await fetch(
        `${process.env.REACT_APP_BACK_END}bookings`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            day: day,
            dayArray: data.targetBookings.dayArray,
          }),
        }
      );
      const data2 = await response2.json();
      console.log(data2);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBookings = async (
  date,

  setCurrentBookings
) => {
  try {
    const day = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
    const response = await fetch(
      `${process.env.REACT_APP_BACK_END}bookings/${day}`
    );
    const data = await response.json();

    if (data.targetBookings !== null) {
      await setCurrentBookings(data.targetBookings.dayArray);
    } else {
      let dayArray = [
        [
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
        ],
        [
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
        ],
      ];
      setCurrentBookings(dayArray);
    }
  } catch (error) {
    console.log(error);
  }
};

export const createMenuEntries = async (
  e,
  course,
  dish,
  price,
  dietary,
  setMenu,
  menu
) => {
  e.preventDefault();

  let glutenFree = false;
  if (dietary === "gluten free") {
    glutenFree = true;
  }

  let vegan = false;
  if (dietary === "vegan") {
    vegan = true;
  }

  let vegetarian = false;
  if (dietary === "vegetarian") {
    vegetarian = true;
  }

  let dairyFree = false;
  if (dietary === "dairy free") {
    dairyFree = true;
  }

  let nuts = false;
  if (dietary === "nuts") {
    nuts = true;
  }


  try {
    const response = await fetch(`${process.env.REACT_APP_BACK_END}menu`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course: course,
        name: dish,
        price: price,
        dietary: [vegan, vegetarian, dairyFree, glutenFree, nuts],
      }),
    });
    const data = await response.json();
    if (menu.length > 0) {
      setMenu([...menu, data.menu]);
    } else {
      setMenu([data.menu]);
    }
  } catch (error) {
    console.log(error);
  }
};

export const menuList = async (setMenu) => {
  let response;
  try {
    response = await fetch(`${process.env.REACT_APP_BACK_END}menu`, {
      method: "GET",
    });
    const data = await response.json();
    setMenu(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (course, name , e ) => {
  e.preventDefault();
  try {
    let response;

    if (course) {
      response = await fetch(`${process.env.REACT_APP_BACK_END}menu/${name}`, {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
      });
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

