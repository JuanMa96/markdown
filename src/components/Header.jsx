import { useState, useEffect } from "react"
import { SmallHeader } from "./SmallHeader"
import { LargeHeader } from "./LargeHeader"
import { Provider } from "react-redux";
import {store} from "../assets/js/redux"

export function Header(){
    const [small, setSmall] = useState(true)

    useEffect(()=>{
        const consulta = window.matchMedia("(max-width: 600px)")
        setSmall(consulta.matches)
        consulta.onchange = ()=>{
            setSmall(consulta.matches)
        }
    }, [])


    return(
        <Provider store={store}>
            {small? <SmallHeader />:<LargeHeader />}
        </Provider>
    )
}
