import React, { useEffect, useState } from "react";
import axios from "./axios";

function App1() {
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.get("api/hello").then((response) => {
            setResult(response.data);
        });
    }, []);

    return (
        <div><h1>{result}</h1></div>
    )
}
export default App1;