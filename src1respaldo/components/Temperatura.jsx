import React, {useState} from 'react'

function Temperatura(){
    const [temperatura, setTemperatura] = useState(19)
    const Subir = () =>{
        setTemperatura(temperatura+1)
    }
    const Bajar = () =>{
        setTemperatura(temperatura-1)
    }
    return (
        <div>
            <h2>la temperatura es: {temperatura}</h2>
            <p>
                {
                    temperatura > 21 ? 'hace calor' : 'hace frio'
                }
            </p>
            <button onClick={Subir}>Aumentar temperatura</button>
            <button onClick={Bajar}>Disminuir la temperatura</button>
        </div>
    )
}

export default Temperatura