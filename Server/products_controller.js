module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {name, description, price, image_url} = req.body

        dbInstance.create_product([ name, description, price, image_url ])
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.read_product(id)
            .then( dbRes => {
                res.status(200).send(dbRes)
            })
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params, query} = req

        dbInstance.update_product([ params.id, query.desc ])
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_product(id)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    }
}