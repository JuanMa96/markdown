import { useState } from 'react';
import { Remarkable } from 'remarkable';

export function Markdown(props){
    const md = new Remarkable();

    const [value, setValue] = useState("¡Hola **mundo**!")

    function handleChange(e) {
        setValue(e.target.value);
    }

    function getRawMarkup() {
        return { __html: md.render(value) };
    }

    return(
        <div className='h-5/6 bg-sky-300 dark:bg-slate-800 dark:text-white p-3 shadow-xl rounded-2xl gap-3 mx-3 justify-items-center'>
          <div className='flex flex-col items-center'>
            <h2 className='text-2xl mb-3'>Entrada</h2>
            <label htmlFor="markdown-content">
              Introduce algún texto en markdown
            </label>
            <textarea
              id="markdown-content"
              onChange={handleChange}
              defaultValue={value}
              className="mb-3 text-black"
            />
            <h3>Salida</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={getRawMarkup()}
            />
          </div>
        </div>
    )
} 