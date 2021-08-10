export const fetchAdmin = async (e,  username, pass, setAdmin) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_NAME}users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({          
            username: username,
            password: pass,
          }),
        });   
      const data = await response.json();
      setAdmin(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };

export const fetchUsers = async (e,  username, pass, setUser) => {
  e.preventDefault();
  try {
    const response = await fetch(`${process.env.REACT_APP_API_NAME}users`, {
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