import {useState, useEffect} from "react"
import Error from "./Error";



const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
    // Hook useState
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    // Hook useEffect
    useEffect(() =>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])


    // Function Eventos    
    const generarId = () =>{
        const ramdon = Math.random().toString(36).substring(2)
        const aleatorio = Date.now().toString(36)
        return ramdon + aleatorio
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        // Validacion formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log('Hay al menos un campo vacio')

            setError(true)
            return;
        }
        setError(false)

        //Objeto de pacientes
        const objetoPaciente ={
            nombre,
            propietario, 
            email, 
            fecha, 
            sintomas
        }
        if(paciente.id ){
            //Editando registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => 
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

                setPacientes(pacientesActualizados)
                setPaciente({})
            
        }else{
            // Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        

        // Resetear formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administrados</span>
            </p>


            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                
                {error && <Error>Todos los campos son obligatorios</Error> }

                <div className="mb-5">
                    <label
                    htmlFor="mascota"
                    className="block text-gray-700 uppercase">
                        Nombre Mascota
                    </label>
                    <input 
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label
                    htmlFor="propietario"
                    className="block text-gray-700 uppercase">
                        Nombre Propietario
                    </label>
                    <input 
                    value={propietario}
                    onChange={(e)=> setPropietario(e.target.value)}
                    id="propietario"
                    type="text"
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label
                    htmlFor="email"
                    className="block text-gray-700 uppercase">
                        Email
                    </label>
                    <input 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label
                    htmlFor="alta"
                    className="block text-gray-700 uppercase">
                        Alta
                    </label>
                    <input 
                    value={fecha}
                    onChange={(e)=> setFecha(e.target.value)}
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label
                    htmlFor="alta"
                    className="block text-gray-700 uppercase">
                        Sintomas
                    </label>
                    <textarea
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value)}
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los sintomas"/>
                </div> 

                <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'} />
            </form>
        </div>
    ) 
}

export default Formulario