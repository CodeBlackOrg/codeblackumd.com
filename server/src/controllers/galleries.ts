import { Request, Response } from "express";
import pgp from "pg-promise";
import { Gallery } from "../models/galleries";
import dotenv from "dotenv";
dotenv.config();

const connection = {
    connectionString: process.env.DB + "?sslmode=require"
}

const db = pgp()(connection);

export class GalleryQueries {
    async getAllGalleries(req: Request, res: Response) {
      try {
        const allGallerys = await db.manyOrNone("SELECT * FROM gallery");
        return res.json(allGallerys);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while fetching Gallerys." });
      }
    }
  
    async getGalleryByID(req: Request, res: Response, id: string) {
      try {
        const Gallery = await db.one("SELECT * FROM gallery WHERE id = $1", [id]);
        return res.json(Gallery);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while fetching gallery." });
      }
    }
  
    async getGalleriesByEvent(req: Request, res: Response, event: string) {
      try {
        const GallerysByEvent = await db.manyOrNone("SELECT * FROM gallery WHERE event = $1", [event]);
        return res.json(GallerysByEvent);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while fetching gallery." });
      }
    }
  
    createGallery(req: Request, res: Response, gallery: Gallery) {
      db.none("INSERT INTO gallery (date, image, title) VALUES ($1, $2, $3)", 
      [gallery.date, gallery.image, gallery.title])
      .then(() => {
        console.log("Gallery added");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
    updateGallery(req: Request, res: Response, gallery: Gallery, id: string) {
      db.none("UPDATE gallery SET (date, image, title) VALUES ($1, $2, $3) WHERE id = $10", 
      [gallery.date, gallery.image, gallery.title, id])
      .then(() => {
        console.log("Gallery updated");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
    deleteGallery(req: Request, res: Response, id: string) {
      db.none("DELETE FROM gallery WHERE id = $1", [id])
      .then(() => {
        console.log("Gallery deleted");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }