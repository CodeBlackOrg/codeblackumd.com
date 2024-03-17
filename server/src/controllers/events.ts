import { Request, Response } from "express";
import pgp from "pg-promise";
import { Event } from "../models/events";
import dotenv from "dotenv";
dotenv.config();

const connection = {
    connectionString: process.env.DB
}

const db = pgp()(connection);

export class EventQueries {
    async getAllEvents(req: Request, res: Response) {
      try {
        const allEvents = await db.manyOrNone("SELECT * FROM event");
        return res.json(allEvents);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while fetching events." });
      }
    }
  
    async getEventByID(req: Request, res: Response, id: string) {
      try {
        const event = await db.one("SELECT * FROM event WHERE id = $1", [id]);
        return res.json(event);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while fetching event." });
      }
    }
  
    async getEventsByLocation(req: Request, res: Response, location: string) {
      try {
        const eventsByLocation = await db.manyOrNone("SELECT * FROM event WHERE location = $1", [location]);
        return res.json(eventsByLocation);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while fetching events." });
      }
    }
  
    createEvent(req: Request, res: Response, event: Event) {
      db.none("INSERT INTO event (date, description, facebook, image, linkedin, paragraph, readtime, location, title) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", 
      [event.date, event.description, event.facebook, event.image, event.linkedin, event.paragraph, event.readtime, event.location, event.title])
      .then(() => {
        console.log("Event added");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
    updateEvent(req: Request, res: Response, event: Event, id: string) {
      db.none("UPDATE event SET (date, description, facebook, image, linkedin, paragraph, readtime, location, title) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) WHERE id = $10", 
      [event.date, event.description, event.facebook, event.image, event.linkedin, event.paragraph, event.readtime, event.location, event.title, id])
      .then(() => {
        console.log("Event updated");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
    deleteEvent(req: Request, res: Response, id: string) {
      db.none("DELETE FROM event WHERE id = $1", [id])
      .then(() => {
        console.log("Event deleted");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }