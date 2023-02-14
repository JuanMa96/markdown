import { createStore } from "redux";

function createInitialStore(){
    if(!('theme' in localStorage)){
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
            return "dark"
        }else{
            localStorage.setItem("theme", "light")
            return "light"
        }
    }else{
        if(localStorage.getItem("theme") === 'dark'){
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
            return "dark"
        }else{
            localStorage.setItem("theme", "light")
            return "light"
        }
    }
}

function reducer(state = "light", action){
    if(action.type == "switch"){
        return state == "dark"? "light" : "dark"
    }
    return state
}

export const store = createStore(reducer, createInitialStore())


