const pgp = require('pg-promise')()
require('dotenv').config()

const db = pgp(process.env.DB) 

export default function getAllGalleries(req, res) {
    const allGalleries = db.manyOrNone('SELECT * FROM gallery').then(data => {res.json(data)}).catch(error => {console.log(error)})
    return allGalleries
}

export default function getGalleryById(req, res, id) {
    const galleryById = db.one(`SELECT * FROM gallery WHERE id = ${id}`).then(data => {res.json(data)}).catch(error => {console.log(error)})
    return galleryById
}

export default function deleteGallery(req, res, id) {
    const deleteGallery = db.one(`DELETE FROM gallery WHERE id = ${id}`).catch(error => console.log(error))
}
