import Faixa from "../Faixa"
import { SiAlpinedotjs, SiAstro, SiAxios, SiBootstrap, SiCapacitor, SiDart, SiExpo, SiFlutter, SiGit, SiHtmx, SiIonic, SiJavascript, SiLivewire, SiNextdotjs, SiPlaywright, SiReact, SiSass, SiStimulus, SiTails, SiTailwindcss, SiTurbo, SiTypescript } from "react-icons/si";

import {Tooltip } from 'react-tippy';
  
import 'react-tippy/dist/tippy.css';



export default ()=>{
    return(
        <Faixa>
            <CardIcon Title='Javacript' Icon={<SiJavascript/>}/>
            <CardIcon Title='Typescript' Icon={<SiTypescript/>}/>
            <CardIcon Title='Alpine.js' Icon={<SiAlpinedotjs/>}/>
            <CardIcon Title='Htmx' Icon={<SiHtmx/>}/>
            <CardIcon Title='Axios' Icon={<SiAxios/>}/>
            <CardIcon Title='Astro' Icon={<SiAstro/>}/>
            <CardIcon Title='React' Icon={<SiReact/>}/>
            <CardIcon Title='Next.js' Icon={<SiNextdotjs/>}/>
            <CardIcon Title='Tailwind' Icon={<SiTailwindcss/>}/>
            <CardIcon Title='Bootstrap' Icon={<SiBootstrap/>}/>
            <CardIcon Title='Expo' Icon={<SiExpo/>}/>
            <CardIcon Title='Ionic' Icon={<SiIonic/>}/>
            <CardIcon Title='Capacitor' Icon={<SiCapacitor/>}/>
            <CardIcon Title='Turbo.js' Icon={<SiTurbo/>}/>
            <CardIcon Title='Stimulus' Icon={<SiStimulus/>}/>
            <CardIcon Title='Livewire' Icon={<SiLivewire/>}/>
            <CardIcon Title='Git' Icon={<SiGit/>}/>
            <CardIcon Title='Playwright' Icon={<SiPlaywright/>}/>



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
         size='regular'

    
        >

        <div className=' mx-2 group hover:bg-white  flex flex-col gap-3 border  border-white rounded-lg p-3 backdrop-blur-lg'>
            <span className='   flex justify-center text-7xl text-white group-hover:text-black'>
              {props.Icon}
            </span>
        </div>
        </Tooltip>
        </>
    )
}