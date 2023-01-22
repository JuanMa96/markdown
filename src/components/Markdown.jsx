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
        <div className="MarkdownEditor">
          <h3>Entrada</h3>
          <label htmlFor="markdown-content">
            Introduce algún texto en markdown
          </label>
          <textarea
            id="markdown-content"
            onChange={handleChange}
            defaultValue={value}
          />
          <h3>Salida</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={getRawMarkup()}
          />
        </div>
    )
} 