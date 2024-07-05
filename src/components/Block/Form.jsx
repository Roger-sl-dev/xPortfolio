


export default ()=>{
    return(
        

      <div className=" p-3  bg-black border border-white rounded-lg">

      <form className=" flex  flex-col gap-5 backdrop-blur-lg"  action="">
          <span className=" flex flex-col gap-2">
              <labe className=" text-white text-2xl font-semibold  " for="">Nome</labe>
              <input className=" border-2 border-white p-2 rounded-lg bg-transparent  focus:outline-none focus:text-black  focus:bg-white  placeholder:text-white  text-white" type="text" placeholder="Nome"/>
            </span>
            <span className=" flex flex-col gap-2">
                <labe className=" text-white text-2xl font-semibold  " for="">Whatsapp</labe>
                <input id="phone"  className=" border-2 border-white p-2 rounded-lg bg-transparent  focus:outline-none focus:bg-white focus:text-black placeholder:text-white  text-white" type="text" placeholder="(99) 99999-9999"/>
              </span>
            
              <span className=" flex flex-col gap-2">
                <labe className=" text-white text-2xl font-semibold  " for="">Email</labe>
                <input className=" border-2 border-white p-2 rounded-lg bg-transparent   focus:outline-none focus:bg-white focus:text-black placeholder:text-white  text-white" type="email" placeholder="Joãosnt@gmail.com"/>
              </span>
            
              <span className=" flex flex-col gap-2">
                <labe className=" text-white text-2xl font-semibold  " for="">Mensagem</labe>
                <textarea className=" border-2 border-white p-2 rounded-lg bg-transparent  focus:outline-none focus:bg-white focus:text-black placeholder:text-white  text-white" placeholder="Mensagem"/>
              </span>

               <button type="submit" className=" bg-white text-black font-semibold text-3xl p-1 rounded-lg">
                Enviar 
               </button>
              
            
        </form>
    </div>


    )
}