import { SiDiscogs, SiDiscord, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si"




export default()=>{
    return(
        <div className=" flex flex-row gap-5  place-items-center text-3xl">
            <a href="" className=" hover:border-4 hover:bg-white text-white hover:text-black p-1  rounded-full">
              <SiInstagram/>
            </a>
            <a href="" className=" hover:border-4 hover:bg-white text-white hover:text-black p-1  rounded-full">
              <SiLinkedin/>
            </a>
            <a href="" className=" hover:border-4 hover:bg-white text-white hover:text-black p-1  rounded-full">
              <SiWhatsapp/>
            </a>
            <a href="" className=" hover:border-4 hover:bg-white text-white hover:text-black p-1  rounded-full">
              <SiDiscord/>
            </a>
        </div>
    )
}