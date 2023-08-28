'use client'
import React, { useState, useEffect } from "react";
import { db, firebaseConfig } from "../../env";
import { CalendarMonths, CalendarYears, CalendarDates } from "./CalendarDates";
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
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
        async function getCalendar() {
            const calendarCol = collection(db, 'Calendar');
            const calendarSnapshot = await getDocs(calendarCol);
            const calendarList = calendarSnapshot.docs.map(doc => doc.data());
            setEvents(calendarList);
            console.log(calendarList);
        }
        getCalendar(db);
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
                                            <div id='CalendarEvent'>
                                                <p id="Day">{day}</p>
                                                <div id="Event" onClick={() => showModal(events.Date, events.Description, events.Image, events.Location, events.Title)}>{events.Name}</div>
                                            </div>
                                            <div id='Modal'>
                                                <div id='ModalContainer'>
                                                    <div id='ModalHeader'>
                                                        <p id='ModalTitle'>{events.Title}</p>
                                                        <p id='ModalDate'>{events.Date}</p>
                                                        <div id='ModalButton' onClick={closeModal}><GrClose/></div>
                                                    </div>
                                                    <div id='ModalBody'>
                                                        <p id='ModalDescription'>{events.Description}</p>
                                                        <p id='ModalLocation'>{events.Location}</p>
                                                        <img id='ModalImage' src={events.Image} alt='Event Image'/>
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