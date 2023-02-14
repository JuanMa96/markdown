import { useLayoutEffect, useState } from "react"
import { useSelector, useDispatch} from "react-redux";

export function ButtonDarkMode(){
    const theme = useSelector((state)=>state)
    const setTheme = useDispatch()
    const [rep, setRep] = useState(0)

    useLayoutEffect(()=>{
        if(rep == 0){
            return setRep(1)  
        }else{
            if (theme == "dark") {
                document.body.classList.add("dark")
                localStorage.setItem("theme", "dark")
            } else {
                document.body.classList.remove("dark")
                localStorage.setItem("theme", "light")
            }
            console.log(`Continua con rep ${rep}`)
        } 
    })

    function changeThemeMode(){
        setTheme({type: "switch"})
    }

    return(
        <span onClick={changeThemeMode} className="bg-yellow-400 text-black py-1 px-3 rounded-lg">
            Cambiar a modo {theme == "dark"? "claro": "oscuro"}
        </span>
    )
}