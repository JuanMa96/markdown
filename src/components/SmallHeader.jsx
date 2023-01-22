import { useEffect, useState } from "react"
import Hammer from "hammerjs"

export function SmallHeader(){
    const [open, setOpen] = useState(true)
    
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
            <header className="sticky flex bg-cyan-400 h-14 items-center">
                <div className="container px-3 h-full">
                    <div className="flex absolute h-full items-center z-10">
                        <span className="header__hamburguesa" onClick={handleChange}>H</span>
                    </div>
                    <div className="flex absolute w-full h-full justify-center items-center">
                        <span className="header__logo">JModels</span>
                    </div>
                </div>
            </header>
            <SideNav open={open} handleChange={handleChange}/>
        </div>
    )
}

function SideNav(props){
   let classNameNav = props.open? "": "-translate-x-full "
    return(
        <nav className={classNameNav + "transition-transform duration-1000 h-screen sticky bg-orange-400 inset-0 z-10"}>
            <div className="container px-3">
                <header className="relative h-14 z-10 flex items-center">
                    <span className="nav__hamburguesa" onClick={props.handleChange}>X</span>
                </header>
                <ul className="absolute inset-0 flex flex-col justify-center items-center">
                    <li>Inicio</li>
                    <li>¿Qué nos diferencia?</li>
                    <li>¿Por qué elegirnos?</li>
                </ul>
            </div>     
        </nav>
    )
}