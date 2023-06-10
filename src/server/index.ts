import * as Server from "react-dom/server"
import express from "express"
import {App} from "../client/App"

const app = express()
app.use("/public", express.static("public"))
const port = process.env["PORT"] ?? "1234"

app.get("/", (req, res) => {
    const html = Server.renderToString(App())
    res.send(`
      <html lang="en">
        <head>
            <title>My app</title>
            <script async type="text/javascript" src="./public/app.js"></script>
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
    </html>
  `)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
