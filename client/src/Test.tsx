import { useState } from "react";

function App() {
    const [text, setText] = useState("");

    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)} />
            <p>{text}</p>
        </>
    );
}

export default App;
