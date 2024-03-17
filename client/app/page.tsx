import Hero from "./Components/Hero";
import Events from "./Components/Events";
import Calendar from "./Components/Calendar";
import Photos from "./Components/Photos";
import Newsletter from "./Components/Newsletter";
import getAllEvents from "../services/GET/getAllEvents";
import Header from "./GlobalComponents/Header";

export default async function Home() {

    const eventData = await getAllEvents();

    return (
        <html>
            <body>
                <Header/>
                <Hero/>
                <Events/>
                {/* <Calendar data={eventData} /> */}
                <Photos/>
                <Newsletter/>
            </body>
        </html>
    );
};