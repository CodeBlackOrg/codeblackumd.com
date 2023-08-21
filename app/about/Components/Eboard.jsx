import React from "react";
import { members } from "./EboardMembers";
import { FaLinkedinIn } from "react-icons/fa";

export default function Eboard() {
    
    return (
        <div id="Eboard">
            <div id="EboardContainer">
                <div id="EboardTitleContainer">
                    <p id="EboardTitle">meet the e-board</p>
                </div>
                <div id="EboardSeperationContainer">
                    <div id="EboardSeperation"/>
                </div>
                <div id="EboardMembersContainer">
                    {members.map((member) => (
                        <div key={member.id}>
                            <div id="EboardMember">
                                <div id="EboardMemberImageContainer">
                                    <img id="EboardMemberImage" src={member.img}/>  
                                </div>
                                <div id="EboardMemberRoleContainer">
                                    <p id="EboardMemberRole">{member.role}</p>
                                </div>
                                <div id="EboardMemberNameContainer">
                                    <p id="EboardMemberName">{member.name}</p>
                                </div>
                                <div id="EboardMemberDescriptionContainer">
                                    <p id="EboardMemberDescription">{member.desc}</p>
                                </div>
                                <div id="EboardMemberButtonContainer">
                                   <button id="EboardMemberButton" href={member.link}><FaLinkedinIn/></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        <style>
            {`
                #Eboard {

                }
                #EboardMembersContainer {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
                }
            `}
        </style>
        </div>
    )
}