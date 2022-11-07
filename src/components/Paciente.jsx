
const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
                
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{''}
                    <span className="font-normal">Hook</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{''}
                    <span className="font-normal">Juan Manuel</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email:{''}
                    <span className="font-normal">correo@correo.com</span>
                </p>
                
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Salida:{''}
                    <span className="font-normal">10/dic/2022</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{''}
                    <span className="font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sed delectus nihil quod asperiores recusandae perspiciatis, dignissimos exercitationem blanditiis dolore expedita voluptas cupiditate est laborum explicabo consectetur molestias! Accusantium, minima?</span>
                </p>
            </div>
    )
}

export default Paciente