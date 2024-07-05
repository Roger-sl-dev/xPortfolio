



export default function Button( {children,Link}){
    return(
        <a className="  border-2 border-white px-4 py-2  bg-white hover:scale-95  rounded-lg  text-2xl text-black font-semibold backdrop-blur-md" href={Link}>
            {children}
        </a>
    )
}