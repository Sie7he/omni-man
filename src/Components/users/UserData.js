import React, { useEffect,useState } from 'react'


export const UserData = () => {
 
    const [user, setUser] = useState([])


    useEffect(() => {
        console.log('useEffect');
        getUser()
    }, [])

        const getUser = async () =>{

          const url =  'http://localhost/omicron/api/index.php/Administracion/Usuarios/get'
          const resp = await fetch(url);
          const data = await resp.json();
          const aaa = JSON.stringify(data);
          console.log('Response: ', aaa)
        }
  
    return <div>{user}</div>

}
