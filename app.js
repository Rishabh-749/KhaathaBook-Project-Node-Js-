const express = require('express')
const app = express()
const fs = require('fs')
const { request } = require('http')
const port = 749

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extenden : true}))
app.use(express.static('public'))

app.get('/', (request, response)=>{
    fs.readdir('./Hisaabs',(error, files)=>{
        console.log(files);
        if(error) return response.status(500).send(error)
        response.render('index',{files: files})
    })
})

app.get('/create',(request, response)=>{
    response.render('create')
})

app.post('/createrecord',(request, response)=>{
    // response.send(request.body)
    fs.writeFile(`./Hisaabs/${request.body.title}.txt`,`${request.body.description}`,(error)=>{
        if(error) return response.status(500).send(error)
        response.redirect('/')
    })
})


app.get('/hissab/:filename',(request, response)=>{
    console.log(request.params.filename)
    fs.readFile(`./Hisaabs/${request.params.filename}.txt`, 'utf-8', (err, filedata)=>{
        if(err) return response.status(500).send(err)
            response.render("hissab", {filedata, filename: request.params.filename})
    })
})

app.get('/edit/:filename',(request, response)=>{
    fs.readFile(`./Hisaabs/${request.params.filename}.txt`, 'utf-8', (err, filedata)=>{
        if(err) return response.status(500).send(err)
            response.render('edit', {filedata, filename: request.params.filename})
    })
})
app.get('/delete/:filename',(request, response)=>{
    fs.unlink(`./Hisaabs/${request.params.filename}.txt`, (err)=>{
        if(err) return response.status(500).send(err)
        response.redirect('/')
    })
})

app.post('/update/:filename',(request, response)=>{
    // response.send(request.body)
    fs.writeFile(`./Hisaabs/${request.params.filename}.txt`,`${request.body.description}`,(error)=>{
        if(error) return response.status(500).send(error)
        response.redirect('/')
    })
})

app.listen(port)