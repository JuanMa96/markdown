export function LargeHeader(){
    return(
        <header className="sticky flex bg-cyan-400 h-14 items-center">
            <nav className="container flex justify-between items-baseline">
                <a href="/"><span className="font-mono text-3xl">Markdown</span></a>
                <ul className="flex gap-x-2" id="lista">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li><a href="/about">Acerca de</a></li>
                </ul>
            </nav>
        </header>
    )
}
