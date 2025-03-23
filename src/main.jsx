import React from "react";
import ReactDOM from "react-dom/client";
import NoCrash from "./NoCrash";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <NoCrash>
            <App/>
        </NoCrash>
    </React.StrictMode>
)