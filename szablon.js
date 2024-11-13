import fs from 'fs'

let html = fs.readFileSync('./szablon.html').toString()
let artykul = fs.readFileSync('./artykul.html').toString()

const result = html.replace('<body></body>','<body>'+artykul+'</body>')
fs.writeFileSync('./podglad.html',result)