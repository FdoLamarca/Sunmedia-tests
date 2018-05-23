import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    
    static create(events, types) {
        var eventsToShow = new Array();
        for (var i in events){
            if (types.indexOf(events[i].type) != -1) {
                // Lo encuentra en la lista de eventos, por lo tanto lo copia en el nuevo objeto
                eventsToShow.push(events[i]);
            }
        }

        return new EventManager();
    }
};