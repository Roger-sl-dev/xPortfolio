import Footer from "../components/Block/Footer"
import Navbar from "../components/Block/Navbar"




export default(   {children})=>{
    return(
        <>
        <header className=" px-4 lg:px-10 py-4">
          <Navbar/>
        </header>
        <div class="absolute overflow-y-scroll top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(#ffffff33_1px,#000_1px)] bg-[size:20px_20px]">
          {children}
          <Footer/>
        </div>
        fo
        </>
    )
}