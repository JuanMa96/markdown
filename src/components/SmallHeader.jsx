import {useEffect, useState } from "react"
import Hammer from "hammerjs"
import { ButtonDarkMode } from "./ButtonDarkMode"

export function SmallHeader(){
    const [open, setOpen] = useState(false)
    
    useEffect(()=>{
        const hammerTime = new Hammer(document.body)

        hammerTime.on("swipeleft", ()=>{
            setOpen(false)

        })

        hammerTime.on("swiperight", ()=>{
            setOpen(true)
        })
    }, [])

    const handleChange = ()=>{
        setOpen((prevOpen)=> !prevOpen)
    }
    
    return(
        <div>
            <header className="fixed w-full flex bg-cyan-400 dark:bg-slate-800 dark:text-white h-14 justify-center items-center">
                <div className="w-full h-full">
                    <div className="flex ml-3 absolute h-full items-center z-10">
                        <span className="icon-bars align-middle" onClick={handleChange}></span>
                    </div>
                    <div className="flex absolute w-full h-full justify-center items-center">
                        <a href="/"><span className="font-mono text-3xl">Markdown</span></a>                        
                    </div>
                </div>
            </header>
            <SideNav open={open} handleChange={handleChange}/>
        </div>
    )
}

export function SideNav(props){
   let classNameNav = props.open? "": "-translate-x-full "
    return(
        <nav className={classNameNav + "transition-transform duration-1000 h-screen fixed flex bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-900 dark:to-blue-900 dark:text-white z-10 inset-0"}>
                <div className="relative h-14 z-10 flex items-center">
                    <span className="ml-3 icon-times align-middle" onClick={props.handleChange}></span>
                </div>
                    
                <ul className="absolute inset-0 flex flex-col justify-center items-center gap-3">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/about">Acerca de</a>
                    </li>
                    <li>
                        <ButtonDarkMode/>
                    </li>
                </ul>
                 
        </nav>
    )
}