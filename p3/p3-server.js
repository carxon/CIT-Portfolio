const fs = require('fs');
const fastify = require("fastify")();
//coe modules
const { coinCount } = require('./p3-module.js')

fs.readFile(`${__dirname}/index.html`,(err, data)=>{
    reply
    .header('Content-Type','text/html')
    if (err) {
        console.log(err);
        res.statusCode=500;
        res.end("Errorprocessingrequest");
        }
        else {
            res.statusCode=200;
            console.log("URL:",req.url);
            //res.write(data);
            res.end();
        }
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

fastify.get("/coin", (request, reply) => {
    const option = request.query
    switch (option) {
        case 1:
            coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
            break;
        case 2:
            coinCount(...coins);
            break;
        default:
            if (validDenomination() = 1) { return 0 }
            break;
    }
    reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`);
    });