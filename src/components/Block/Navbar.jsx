

export default()=>{
    return(
        <div className=" flex flex-row justify-between backdrop-blur-md px-6 py-3 bg-black/25 border border-white rounded-lg">
	<div className="navbar-start">
		<a className="  text-white text-3xl font-semibold">RS</a>
	</div>
	<div className=" lg:flex gap-4 hidden">
		<a className=" text-xl text-white">Sobre</a>
		<a className=" text-xl text-white">Habilidades</a>
		<a className=" text-xl text-white">Serviços</a>
		<a className=" text-xl text-white">Projetos</a>
		<a className=" text-xl text-white">Contato</a>
	</div>
	
</div>
    )
}