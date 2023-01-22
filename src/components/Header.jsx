import { useState, useEffect } from "react"
import { SmallHeader } from "./SmallHeader"
import { LargeHeader } from "./LargeHeader"


export function Header(){
    const consulta = window.matchMedia("(max-width: 600px)")
    const [small, setSmall] = useState(consulta.matches)

    useEffect(()=>{
        setSmall(consulta.matches)
        consulta.onchange = ()=>{
            setSmall(consulta.matches)
        }
    }, [])

    if(small){
        return <SmallHeader />
    }else{
        return <LargeHeader />
    }
}
