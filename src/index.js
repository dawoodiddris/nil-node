const Express = require('express')
const setupMiddleware = require('./setup/middleware')

const app = Express()

setupMiddleware(app)

app.listen(3000, () => {
     console.log("Live at http://localhost:3000")
})