import React, { useContext, useEffect } from "react";
import { MarkdownContext } from "./context/MarkdownContext";
import marked from "marked";

function Previewer() {
    const [text, setText] = useContext(MarkdownContext);

    const markdown = marked.parseInline(text);

    return (
        <div className="previewWrapper">
            <div className="toolbar border">
                <h4>Previewer</h4>
            </div>
            <div
                className="pale-bg"
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(text) }}
            ></div>
        </div>
    );
}

export default Previewer;
