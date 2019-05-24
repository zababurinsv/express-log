import express from "express";
import readXlsxFile from "read-excel-file/node";
import xlsx from 'node-xlsx';
import bodyParser from "body-parser";
import cors from "cors";
import fs from 'fs'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', function (req, res) {
    let obj = 'text'
    var originalLog = console.log;
    console.log = function(str){
        originalLog(str);
        fs.writeFile("log/cheese.log", str, function(err) {
            if(err) {
                // return console.log(err);
            }
            // console.log("The file was saved!");
        });

        // Your extra code
    }
    console.log(`~~~~~~${obj}~~~~~~`)
    // const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`./resultTable.xls`));

    // readXlsxFile(`./resultTable.xls`).then((rows) => {
    //
    //     console.log('~~~1~~~~', rows)
    //


    //
    // })
    //
    // for(let key in workSheetsFromBuffer){
    //     console.log('~~~2~~~~', workSheetsFromBuffer[key])
    // }

    res.send('Hello World')
})

app.post('/', function (req, res) {

    readXlsxFile('/path/to/file').then((rows) => { })
    res.send('Hello World')
})

app.post('/:param', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)