'use client'
import React, { useState, useEffect } from "react";
import { CalendarMonths, CalendarYears, CalendarDates } from "./CalendarDates";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export default function Calendar() {
    const [events, setEvents] = useState([]);

    const prevMonth = () => {
        console.log('prevMonth');
    }

    const afterMonth = () => {
        console.log('afterMonth');
    }

    const showModal = (Date, Description, Image, Location, Title) => {
        const modal = document.getElementById('Modal');
        modal.style.display = "flex";
    }

    const closeModal = () => {
        const modal = document.getElementById('Modal');
        modal.style.display = "none";
    }

    useEffect(() => {
        const getCalendar = async () => {
            try {
                const response = await query(collection(db, "Calendar"));
                console.log(response);
                const calendarSnapshot = onSnapshot(response, (querySnapshot) => {
                    let cArr = [];
                    querySnapshot.forEach((doc) => {
                        cArr.push({...doc.data(), id: doc.id});
                    });
                    setEvents(cArr);
                }) 
                console.log("L",events);
            } catch(error) {console.log(error)}
        }
        getCalendar();
    }, []);
    
    return (
        <div id="Calendar">
            <div id="CalendarContainer">
                <div id="CalendarHeaderContainer">
                    <p id="CalendarHeader">Calendar</p>
                </div>
                {CalendarYears.map((year) => (
                    <div key={year.id}>
                        {CalendarMonths.map((month) => (
                            <div id='CalendarEventsContainer' key={month.id}>
                                <div id="CalendarMonthContainer">
                                    <div id="PrevMonthContainer">
                                        <BiSolidLeftArrow id='LeftArrow' onClick={prevMonth}/>
                                    </div>
                                    <p id="CalendarMonth">{month}{year}</p>
                                    <div id="AfterMonthContainer">
                                        <BiSolidRightArrow id='RightArrow' onClick={afterMonth}/>
                                    </div>
                                </div>
                                <div id="CalendarDaysContainer">
                                    <div id="CalendarDay">Sun</div>
                                    <div id="CalendarDay">Mon</div>
                                    <div id="CalendarDay">Tue</div>
                                    <div id="CalendarDay">Wed</div>
                                    <div id="CalendarDay">Thu</div>
                                    <div id="CalendarDay">Fri</div>
                                    <div id="CalendarDay">Sat</div>
                                </div>
                                <div id="CalendarTableContainer">
                                    {CalendarDates.map((day) => (
                                        <div key={day.id}>
                                            {events.map((event) => (
                                               <div key={event.id}>
                                                <p>{event}</p>
                                               </div> 
                                            ))}
                                            <div id='CalendarEvent'>
                                                <p id="Day">{day.Title}</p>
                                                <div id="Event" onClick={() => showModal(day.Date, day.Description, day.Image, day.Location, day.Title)}>{day.Title}</div>
                                            </div>
                                            <div id='Modal'>
                                                <div id='ModalContainer'>
                                                    <div id='ModalHeader'>
                                                        <p id='ModalTitle'>{day.Title}</p>
                                                        <p id='ModalDate'>{day.Date}</p>
                                                        <div id='ModalButton' onClick={closeModal}><GrClose/></div>
                                                    </div>
                                                    <div id='ModalBody'>
                                                        <p id='ModalDescription'>{day.Description}</p>
                                                        <p id='ModalLocation'>{day.Location}</p>
                                                        <img id='ModalImage' src={day.Image} alt='Event Image'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        <style>
            {`
                #Calendar {

                }
            `}
        </style>
        </div>
    )
}