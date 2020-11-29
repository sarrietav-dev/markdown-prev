import React, { useContext, useEffect } from "react";
import { MarkdownContext } from "./context/MarkdownContext";
import marked from "marked";

function Previewer() {
    const [text, setText] = useContext(MarkdownContext);

    const markdown = marked.parseInline(text);

    return (
        <div
            className="pale-bg"
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
    );
}

export default Previewer;
