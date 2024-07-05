



export function Card({children,Numero,Titulo}){
    return(
        <div className={  " border border-white backdrop-blur-lg rounded-lg flex flex-col gap-5 w-full p-5"}>
    
            <span className=" flex flex-row gap-5 text-white">

            <h3 className="  text-3xl lg:text-4xl  font-semibold">{Numero}</h3>
            <h3 className="  text-3xl  lg:text-4xl  font-semibold">{Titulo}</h3>
            
        </span>
    <p className=" text-xl text-white font-semibold">
      {children}
    </p>
</div>
    )
}