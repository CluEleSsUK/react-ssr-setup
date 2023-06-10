import * as React from "react"
import * as ReactDOM from "react-dom"
import {App} from "./App"

ReactDOM.hydrate(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);
