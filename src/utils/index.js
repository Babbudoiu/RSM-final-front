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
      console.log(data)
      setAdmin(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };

export const fetchUsers = async (e,  username, pass, setUser) => {
  e.preventDefault();
  try {
    const response = await fetch(`${process.env.REACT_APP_BACK_END}users/${username}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({          
          password: pass,
        }),
      });   
    const data = await response.json();
    setUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const createUsers = async (e,  username, pass, setUser) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACK_END}users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({          
            username: username,
            password: pass,
          }),
        });   
      const data = await response.json();
      setUser(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };