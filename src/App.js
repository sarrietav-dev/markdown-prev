import { MarkdownProvider } from "./components/context/MarkdownContext";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./static/App.css";

function App() {
    return (
        <MarkdownProvider>
            <div className="App">
                <Editor />
                <Previewer />
            </div>
        </MarkdownProvider>
    );
}

export default App;
