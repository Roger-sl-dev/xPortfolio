import Social from "../ui/Social"


export default()=>{
    return(
        <div className=" flex flex-row justify-between backdrop-blur-md px-6 py-8 bg-black/25 border-t-2 border-white ">
	<div className="navbar-start w-1/5">
		<a className="  text-white text-4xl font-semibold">RS</a>
	</div>
	<div className=" lg:grid gap-4 hidden w-3/5  place-items-center">
        <h2 className=" text-center text-white font-semibold text-xl ">

    Ⓒ 2024 - Todos Os Direitos Reservados 
        </h2>


      
	</div>
    <span className=" w-1/5">

    <Social/>
    </span>
	
</div>
    )
}