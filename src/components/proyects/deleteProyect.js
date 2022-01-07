export const deleteProyect = async (id) => {
        let item = {"id": id, "estado": "0"}
        let result = await fetch(process.env.REACT_APP_API + '/Administracion/Proyectos/cambiarEstado', {
            method: "POST",
            body: JSON.stringify(item)
        });
        console.log(item)
        result = await result.json();
        const { correcto, mensaje } = result;
        if(correcto){
            console.log(mensaje) 
        } else {
            console.log(mensaje)
        }

        
}