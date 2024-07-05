import Faixa from "../Faixa"
import { SiAdonisjs, SiAlpinedotjs, SiAmazonaws, SiAnsible, SiAppwrite, SiAstro, SiAwslambda, SiBootstrap, SiCloudflare, SiDart, SiDeno, SiDigitalocean, SiDocker, SiElixir, SiExpo, SiFirebase, SiFlutter, SiHono, SiJavascript, SiJest, SiKubernetes, SiLaravel, SiLivewire, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhoenixframework, SiPhp, SiPostgresql, SiReact, SiRuby, SiRubyonrails, SiSass, SiStimulus, SiSymfony, SiTails, SiTailwindcss, SiTurbo, SiTypescript, SiVercel } from "react-icons/si";

import {Tooltip } from 'react-tippy';
  
import 'react-tippy/dist/tippy.css';





export default ()=>{
    return(
        <Faixa Dir={'right'}>
            <CardIcon Title='Node' Icon={<SiNodedotjs/>}/>
            <CardIcon Title='Adonis.js' Icon={<SiAdonisjs/>}/>
            <CardIcon Title='Nest.js' Icon={<SiNestjs/>}/>
            <CardIcon Title='Deno' Icon={<SiDeno/>}/>
            <CardIcon Title='Hono.js' Icon={<SiHono/>}/>
            <CardIcon Title='Jest' Icon={<SiJest/>}/>
            <CardIcon Title='PHP' Icon={<SiPhp/>}/>
            <CardIcon Title='Laravel' Icon={<SiLaravel/>}/>
            <CardIcon Title='Symfony' Icon={<SiSymfony/>}/>
            <CardIcon Title='Mysql' Icon={<SiMysql/>}/>
            <CardIcon Title='Postgresql' Icon={<SiPostgresql/>}/>
            <CardIcon Title='MongoDB' Icon={<SiMongodb/>}/>
            <CardIcon Title='Firebase' Icon={<SiFirebase/>}/>
            <CardIcon Title='Appwrite' Icon={<SiAppwrite/>}/>
            <CardIcon Title='Docker' Icon={<SiDocker/>}/>
            <CardIcon Title='Kubernetes' Icon={<SiKubernetes/>}/>
            <CardIcon Title='Vercel' Icon={<SiVercel/>}/>
            <CardIcon Title='Cloudflare' Icon={<SiCloudflare/>}/>
            <CardIcon Title='Lambda' Icon={<SiAwslambda/>}/>
            <CardIcon Title='AWS' Icon={<SiAmazonaws/>}/>
            <CardIcon Title='Digital ocean' Icon={<SiDigitalocean/>}/>

             <></>

        </Faixa>
    )
}

const CardIcon =(props)=>{
    return (
        <>
        <Tooltip
        title={props.Title}
        position="bottom"
        animation="scale"
        inertia="scale"
         followCursor ="true"

    
        >

        <div className=' group  hover:bg-white mx-2 group  flex flex-col gap-3 border  border-white rounded-lg p-3 backdrop-blur-lg'>
            <span className='   flex justify-center text-7xl text-white group-hover:text-black'>
              {props.Icon}
            </span>
        </div>
        </Tooltip>
        </>
    )
}