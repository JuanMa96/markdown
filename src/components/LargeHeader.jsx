import { ButtonDarkMode } from "./ButtonDarkMode"

export function LargeHeader(){
    return(
        <header className="fixed w-full flex bg-cyan-400  dark:bg-slate-800 dark:text-white h-14 items-center">
            <nav className="container flex justify-between items-baseline px-3">
                <a href="/"><span className="font-mono text-3xl">Markdown</span></a>
                <ul className="flex gap-x-3 align-baseline" id="lista">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li><a href="/about">Acerca de</a></li>
                    <li>
                        <ButtonDarkMode />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
