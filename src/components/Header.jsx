import { useState, useEffect } from "react"
import { SmallHeader } from "./SmallHeader"
import { LargeHeader } from "./LargeHeader"


export function Header(){
    const [small, setSmall] = useState(true)

    useEffect(()=>{
        const consulta = window.matchMedia("(max-width: 600px)")
        setSmall(consulta.matches)
        consulta.onchange = ()=>{
            setSmall(consulta.matches)
        }
    }, [])


    return small? <SmallHeader />:<LargeHeader /> 
}
