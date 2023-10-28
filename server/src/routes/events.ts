export class EventsRoutes {
    
    static readonly getAllEvents = '/events';

    static readonly getEventByID = '/event/:id';
    
    static readonly getEventsByLocation = '/event/location/:location';
    
    static readonly createEvent = '/events/create';
    
    static readonly updateEvent = '/events/update/:id';
    
    static readonly deleteEvent = '/events/delete/:id';

}