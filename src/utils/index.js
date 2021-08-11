export const fetchAdmin = async (e,  username, password, setAdmin) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACK_END}admin/${username}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({    
            password: password,
          }),
        });   
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
    console.log(data)
    localStorage.setItem('MyToken',data.token)
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

export const authUser = async (setUser)=>{
    if(localStorage.MyToken){
        try {
            const response = await fetch(`${process.env.REACT_APP_BACK_END}users`,{
                method: 'GET',
                headers: {'Authorization':`Bearer ${localStorage.getItem('MyToken')}`}
            })
            const data = await response.json()
            setUser(data.name)
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const createBooking =async (e, firstName, surname, groupSize, phoneNumber,date,time)=>{
  try {
    e.preventDefault();
    
    const response = await fetch(`${process.env.REACT_APP_BACK_END}bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date:date,
        time:time,
        custName:firstName,
        custSurname:surname,
        people:groupSize,
        phoneNum:phoneNumber
        
      }),
    });
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
    
  }
}