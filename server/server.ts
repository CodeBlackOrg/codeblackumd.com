import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AdminQueries } from "./src/controllers/admin.js";
import { EventQueries } from "./src/controllers/events.js";
import { GalleryQueries } from "./src/controllers/galleries.js";
import { AdminRoutes } from "./src/routes/admin.js";
import { EventsRoutes } from "./src/routes/events.js";
import { GalleryRoutes } from "./src/routes/galleries.js";

dotenv.config();
const port = process.env.PORT;

const corsOptions = {
  origin: (origin: any, callback: any) => {
    const allowedOrigins = "https://codeblackumd.vercel.app";
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    } 
  },
}; 

const server = express();
server.use(express.json());
server.use(cors(corsOptions));

const GalleryControllers = new GalleryQueries();
const EventCsontrollers = new EventQueries();
const AdminControllers = new AdminQueries();

server.get("/", (req, res) => {
  res.json("Code: Black API");
});



// Gallery Requests

server.get(GalleryRoutes.getAllGalleries, (req, res) => {
    GalleryControllers.getAllGalleries(req, res)
});

server.get(GalleryRoutes.getGalleryByID, (req, res) => {
    const id = String(req.params.id);
    GalleryControllers.getGalleryByID(req, res, id)
});

server.get(GalleryRoutes.getGalleryByEvent, (req, res) => {
    const event = String(req.params.event);
    GalleryControllers.getGalleriesByEvent(req, res, event)
});

server.post(GalleryRoutes.createGallery, (req, res) => {
    const data = req.body;
    GalleryControllers.createGallery(req, res, data)
});

server.put(GalleryRoutes.updateGallery, (req, res) => {
    const data = req.body;
    const id = String(req.params.id);
    GalleryControllers.updateGallery(req, res, data, id)
});

server.delete(GalleryRoutes.deleteGallery, (req, res) => {
    const id = String(req.params.id);
    GalleryControllers.deleteGallery(req, res, id)
});



// Event Requests

server.get(EventsRoutes.getAllEvents, (req, res) => {
    EventCsontrollers.getAllEvents(req, res)
});

server.get(EventsRoutes.getEventByID, (req, res) => {
    const id = String(req.params.id);
    EventCsontrollers.getEventByID(req, res, id)
});

server.get(EventsRoutes.getEventsByLocation, (req, res) => {
    const location = String(req.params.location);
    EventCsontrollers.getEventsByLocation(req, res, location)
});

server.post(EventsRoutes.createEvent, (req, res) => {
    const data = req.body;
    EventCsontrollers.createEvent(req, res, data)
});

server.put(EventsRoutes.updateEvent, (req, res) => {
    const data = req.body;
    const id = String(req.params.id);
    EventCsontrollers.updateEvent(req, res, data, id)
});

server.delete(EventsRoutes.deleteEvent, (req, res) => {
    const id = String(req.params.id);
    EventCsontrollers.deleteEvent(req, res, id)
});




// Admin Auth Request

server.get(AdminRoutes.checkCredentials, (req, res) => {
    const email = String(req.params.email);
    const password = String(req.params.password);
    AdminControllers.checkCredentials(req, res, email, password)
});



server.get('*', (req, res) => {
    res.status(404).json('404 Not Found');
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});