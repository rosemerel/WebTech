
const express = require('express')
const app = express()
const port = 1337;
const path = require('path')

//USE
app.use(express.static(path.join(__dirname, 'public')))

//LISTEN
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//GET
app.get(
    '/hello/:name', 
    (req, res) => res.render('hello.ejs', {name: req.params.name})
)

app.get('/metrics.json', async (req, res) => {
    const data = await metrics.list()
    res.status(200).json(data)
})


//SET
app.set('port', port)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');





















/* // Import a module
const http = require('http')

// Import Node url module
const url = require('url')

const qs = require('querystring')

// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {
    // Retrieve and print the current path
    const path = url.parse(req.url).pathname;
    console.log(path);

    // Retrieve and print the queryParams
    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);
  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
}
const server = http.createServer(serverHandle);
server.listen(8080) */