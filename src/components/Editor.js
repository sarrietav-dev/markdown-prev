import React, { useContext } from "react";
import "../static/App.css";
import { MarkdownContext } from "./context/MarkdownContext";

function Editor() {
    const [text, setText] = useContext(MarkdownContext);

    function manageTextarea(e) {
    }

    return (
        <div id="editor">
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="pale-bg"
            ></textarea>
        </div>
    );
}

export default Editor;
