import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

import fs from "fs/promises";
import {createWriteStream} from 'fs'
const { Readable } = require("stream");
const { finished } = require("stream/promises");
const path = require("path");
const downloadFile = async (url, fileName) => {
    const res = await fetch(url);
    await fs.mkdir("downloads", { recursive: true });
    const destination = path.resolve("./downloads", fileName);
    try {
        const fileStream = await createWriteStream(destination, {
            flags: "wx"
        });
        await finished(Readable.fromWeb(res.body).pipe(fileStream));
    } catch (err) {
        console.log(err);
        console.log("err");
    }
};

app.get("/", async c => {
    await downloadFile(
        "https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4",
        "file.mp4"
    );

    serveStatic({ root: "./downloads/file.mp4" });
});


app.get("/wow", async c => {
    const data = await fetch("https://dogapi.dog/api/facts").then(r => {
        console.log(r)
        return r.json()
    });
    return c.text(data.facts[0]);
});

app.get("/video", async c => {
    const data = await fetch("https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4").then(r => {
        console.log(r)
        return r.
    });
    return c.text(data.facts[0]);
});

export default app;
