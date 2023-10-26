const express = require('express');

let app = express();

app.get("test", (req, resp) => {
    resp.end(`<h1>Hello Word</h1>`);
})

app.use(express.static('frontend'));

const port = 3001

app.listen(port, ()=> {
    console.log(`Server on por ${port}`)
})