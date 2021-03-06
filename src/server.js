const express = require('express')
const path = require('path')

const app = express()

//definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os qrquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server pra receber dados via formulário
app.use(express.urlencoded({ extended: true}))

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

//404 error
app.use((req, res) => {
res.send('Página não encontrada')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server islistening on port ${port}`))