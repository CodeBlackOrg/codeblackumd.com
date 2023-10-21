export class GalleriesRoutes {
    
    static readonly getAllGalleries = '/gallery';

    static readonly getGalleryByID = '/gallery/:id';
    
    static readonly getGalleryByEvent= '/gallery/event/:event';
    
    static readonly createGallery = '/gallery/create';
    
    static readonly updateGallery = '/gallery/update/:id';
    
    static readonly deleteGallery = '/gallery/delete/:id';

}