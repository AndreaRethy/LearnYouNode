const net = require('net');
const portNumber = process.argv[2];
const date = new Date();
let time = () => {
    //YYYY-MM-DD hh:mm
    let year = date.getFullYear()
    let month = `${ date.getMonth() + 1 }` // starts at 0
    let day = `${date.getDate()}` // returns the day of month
    let hours = `${date.getHours()}`
    let minutes = `${date.getMinutes()}`

    if (month < 9) {
        month = 0+month
    }
    if (day < 9) {
        day = 0+day
    }
    if (hours < 9) {
        hours = 0+hours
    }
    if (minutes < 9) {
        minutes = 0+minutes
    }

    return `${year}-${month}-${day} ${hours}:${minutes}\n`
}

const server = net.createServer((socket) => {
    // console.log('a client connected');

    // socket.on("data", (clientData) => {
    //     console.log(`client sent ${clientData}`)
    // })

    socket.write(time())

    // socket.on('end', () => {
    //     console.log('Client disconnected');
    // });
    socket.end()
})
server.listen(portNumber, 'localhost')