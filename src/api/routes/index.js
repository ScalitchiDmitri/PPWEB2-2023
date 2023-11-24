const Router = require('express')
const router = new Router()

const modules = ['categori', 'dish']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router