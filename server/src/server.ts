import express from 'express'

const app = express();

app.get('/users', (request, response) => {

    const users = [
        {name:'joao', age: 25 },
        {name:"pedro", age: 16},
    ]

    return response.json(users)
    console.log('acessou a rota');
});

app.listen(3333);