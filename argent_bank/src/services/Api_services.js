
const API_BASE_URL = 'http://localhost:3001/api/v1';
export const fetchlogin = async (email, password) => {

  try {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
   
    if (data.body !== undefined) {
     
      const token = data.body.token;
      localStorage.setItem('token', token);
      return true
    }
    else{
      return false
    }
  } catch (error) {
    console.error('Error Login:', error);
  }
  
};
export const Getuserdata = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + localStorage.getItem('token'),
      },
    });
    const data = await response.json();
   
    return data.body; } 
    catch (error) {
    console.error('Error Getuserdata:', error);
    throw error;}
};

export const editname = async (newName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:"Bearer "+localStorage.getItem('token'),      },
      body: JSON.stringify({
        userName: newName,
      }),
    });

    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error('Error Editname:', error);
  }
};
