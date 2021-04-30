import React, {useState} from 'react'

function Formulario(){
    const [nombres, setNombres] = useState([]) //este es para crear arrays
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [name, setName] = useState('')

    const Validar = (event) =>{
        event.preventDefault()
        //evento que se produce cuando se toca el boton
        if(!nombre.trim()){
            console.log('vacio')
            return
        }
        if(!edad.trim()){
            console.log('vacio edad')
            return
        }
    }
    const addNombre = (event) =>{
        event.preventDefault()
        setNombres([...nombres,name])
    }

    const deleteNombre = (id)=>{
        const nuevoArray = nombres.filter(item => item.id !==id)
        setNombres(nuevoArray)
    }

    return (
        <div>
            <form onSubmit={Validar} action="">
                <input placeholder="Introduce en nombre" type="text"
                onChange={
                    (e)=>{
                        setNombre(e.target.value)
                    }
                }
                />
                <input placeholder="introduce la edad" type="text"/>
                <input type="sumit" value="enviar"/>
            </form>
            <form onSubmit={ (e)=>{addNombre(e)}} action="">
                <input onChange={
                    (e)=>{
                        setName(e.target.value)
                    }
                } placeholder="introduce nombre" type="text"/>
                <input type="sumit" value="add nombre"/>
            </form>
        </div>
    )
}

export default Formulario