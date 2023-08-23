'use client'
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { db } from "../../env";
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export default function Calendar({ calendar }) {
    const { Month, Year, Day, Date, Description, Image, Location, Title } = calendar;
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
        async function getCalendar(db) {
            const calendarCol = collection(db, 'Calendar');
            const calendarSnapshot = await getDocs(calendarCol);
            const calendarList = calendarSnapshot.docs.map(doc => doc.data());
            setEvents(calendarList);
        }
    
        const db = getFirestore();
        getCalendar(db);
    }, []);
    
    
    return (
        <div id="Calendar">
            <div id="CalendarContainer">
                <div id="CalendarHeaderContainer">
                    <p id="CalendarHeadr">Calendar</p>
                </div>
                <div id='CalendarEventsContainer'>
                    <div id="CalendarMonthContainer">
                        <div id="PrevMonthContainer">
                            <BiSolidLeftArrow id='LeftArrow' onClick={prevMonth}/>
                        </div>
                        <p id="CalendarMonth">{Month}{Year}</p>
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
                        <table>
                            <tr id='CalendarRow'>
                                <td id='CalendarCol'>
                                    <p id="Day">1</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">2</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">3</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">4</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">5</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">6</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">7</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                            </tr>
                            <tr id='CalendarRow'>
                                <td id='CalendarCol'>
                                    <p id="Day">8</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">9</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">10</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">11</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">12</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div></td>
                                <td id='CalendarCol'>
                                    <p id="Day">13</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">14</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                            </tr>
                            <tr id='CalendarRow'>
                                <td id='CalendarCol'>
                                    <p id="Day">15</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">16</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">17</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">18</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">19</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">20</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                    </td>
                                <td id='CalendarCol'>
                                    <p id="Day">21</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                            </tr>
                            <tr id='CalendarRow'>
                                <td id='CalendarCol'>
                                    <p id="Day">22</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">23</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">24</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">25</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">26</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">27</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">28</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                            </tr>
                            <tr id='CalendarRow'>
                                <td id='CalendarCol'>
                                    <p id="Day">22</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                                <td id='CalendarCol'>
                                    <p id="Day">23</p>
                                    <div id="Event" onClick={showModal}>{event.Name}</div>
                                </td>
                            </tr>
                            <div id='Modal'>
                                <div id='ModalContainer'>
                                    <div id='ModalHeader'>
                                        <p id='ModalTitle'>{Title}</p>
                                        <p id='ModalDate'>{Date}</p>
                                        <div id='ModalButton' onClick={closeModal}><GrClose/></div>
                                    </div>
                                    <div id='ModalBody'>
                                        <p id='ModalDescription'>{Description}</p>
                                        <p id='ModalLocation'>{Location}</p>
                                        <img id='ModalImage' src={Image} alt='Event Image'/>
                                    </div>
                                </div>
                            </div>
                        </table>
                    </div>
                </div>
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

Calendar.propTypes = {
    calendar: PropTypes.shape({
        Month: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Day: PropTypes.string.isRequired,
        Date: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Image: PropTypes.string.isRequired,
        Location: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
    }).isRequired,
};