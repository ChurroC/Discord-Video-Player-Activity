// import { useState } from "react";

function App() {
    // const [text, setText] = useState("");
    // const [video, setVideo] = useState(
    //     "https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4"
    // );

    return (
        <>
            {/* <p>{text}</p>
            <input type="text" onChange={e => setText(e.target.value)} />
            <button onClick={() => setVideo(text)}>Button</button>
            <video width="320" height="240" controls>
                <source src={video} />
            </video>
            <p>{text}</p> */}
            <iframe
                width="420"
                height="315"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4"
            ></iframe>
        </>
    );
}
// https://youtu.be/fNk_zzaMoSs
// https://www.youtube.com/embed/tgbNymZ7vqY

export default App;
