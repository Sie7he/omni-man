import React, { useEffect,useState } from 'react'


export const UserData = () => {
 
    const [user, setUser] = useState([])


    useEffect(() => {
        console.log('useEffect');
        getUser()
    }, [])

        const getUser = async () =>{

          const url =  process.env.REACT_APP_API+'/Administracion/Usuarios/get'
          const resp = await fetch(url);
          const data = await resp.json();
          setUser(JSON.stringify(data));
          console.log('Response: ', user);
        }
  
    return <div>{user}</div>

}
