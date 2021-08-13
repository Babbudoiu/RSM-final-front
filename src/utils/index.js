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
    console.log(data);
    localStorage.setItem("MyToken", data.token);
    setUser(data.user.name);
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
    console.log(day);
    const response = await fetch(
      `${process.env.REACT_APP_BACK_END}bookings/${day}`
    );
    console.log(response);
    const data = await response.json();
    console.log(data.targetBookings);

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
      console.log(data2);
      console.log(dayArray);
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
      console.log(data.targetBookings.dayArray);
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

    await setCurrentBookings(data.targetBookings.dayArray);
  } catch (error) {
    console.log(error);
  }
};
