import { useLayoutEffect, useState } from "react"

export function ButtonDarkMode(){
    const [theme, setTheme] = useState("light")

    useLayoutEffect(()=>{
        if(!('theme' in localStorage)){
            if (window.matchMedia('(prefers-color-scheme: dark)').matches){
                setTheme("dark")
            }else{
                setTheme("light")
            }
        }else{
            if(localStorage.getItem("theme") === 'dark'){
                setTheme("dark")
            }else{
                setTheme("light")
            }
        }

    }, [])

    useLayoutEffect(()=>{
        if (theme == "dark") {
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.body.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }

    })

    function changeThemeMode(){
        setTheme((prevTheme)=> prevTheme == "dark"? "light": "dark")
        console.log(theme)
    }

    return(
        <span onClick={changeThemeMode} className="bg-yellow-400 text-black py-1 px-3 rounded-lg">
            Cambiar a modo {theme == "dark"? "claro": "oscuro"}
        </span>
    )
}