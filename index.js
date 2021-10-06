
const express = require('express')
const app = express()

app.set('port', 1337)

app.listen(
    //GET
     app.get('/hello/:name', 
     (req, res) => res.send("Hello " + req.params.name)), 
    () => console.log(`server listening on ${app.get('port')}`) 
/*     app.get(
        '/hello/:name', 
        (req, res) => res.send("Hello " + req.params.name)
    ) */

)



/* app.post('/', (req, res) => {
    // POST
})
  
app
.put('/', function (req, res) {
    // PUT
})
.delete('/', (req, res) => {
    // DELETE
}) */



















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