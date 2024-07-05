import Imagem from "../../assets/img1.png"


export default (props)=>{
    const data=["php","ruby","node"]
    return(
        <div className=" group flex flex-row justify-between gap-3 w-full p-5 border border-white rounded-md backdrop-blur-lg">
        <span className=" flex flex-col gap-5 w-full lg:w-2/3 justify-items-center">
            <h3 className=" text-4xl text-white font-semibold lg:text-start text-center">
                 {props.Title}
            </h3>
            <p className=" text-white text-xl font-semibold">
                {props.Descri}
            </p>

           

   
        </span>
        <span className=" flex flex-row gap-3 place-self-center">

               
<a href={props.Link} className=" bg-white rounded-lg text-xl font-semibold p-2">
    Github
</a>
<a href={props.Link} className=" bg-white rounded-lg text-xl font-semibold p-2">
    Deploy
</a>
<span className=" flex flex-row gap-3 place-self-center lg:place-self-start">

               

</span>

</span>

     
      
    </div>
    )
}