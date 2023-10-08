const pgp = require('pg-promise')()
require('dotenv').config()

const db = pgp(process.env.DB) 

export default function getAllEvents(req, res) {
    const allEvents = db.manyOrNone('SELECT * FROM event').then(data => {res.json(data)}).catch(error => {console.log(error)})
    return allEvents
}

export default function getEventById(req, res, id) {
    const eventById = db.one(`SELECT * FROM event WHERE id = ${id}`).then(data => {res.json(data)}).catch(error => {console.log(error)})
    return eventById
}

export default function deleteEvent(req, res, id) {
    const deleteEvent = db.one(`DELETE FROM event WHERE id = ${id}`).catch(error => console.log(error))
}

// add create event and update event functions