import React, { useContext } from "react";
import "../static/App.css";
import { MarkdownContext } from "./context/MarkdownContext";

function Editor() {
    const [text, setText] = useContext(MarkdownContext);

    function getText(e) {
        setText(e.target.value);
    }

    return (
        <div id="editor">
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="pale-bg"
                onChange={getText}
            ></textarea>
        </div>
    );
}

export default Editor;
