import React from "react";

export default function SponsorForm() {
    
    return (
        <div id="SponsorForm">
            <div id="SponsorsFormContainer">
                <div id="SponsorsFormHeaderContainer">
                    <div id="SponsorsFormTitleContainer">
                        <p id="SponsorsFormTitle">interested in sponsoring?</p>
                    </div>
                    <div id="SponsorsFormSubtitleContainer">
                        <p id="SponsorsFormSubtitle">Fill out the form below!</p>
                    </div>
                </div>
                <div id="FormContainer">
                    <form id="Form" action="https://api.web3forms.com/submit" method="POST">
                        <input style={{display: "none"}} name="access_key" value="8b8d6193-e3e2-4922-9a86-9b90f4ee6a41"/>
                        <div id="FormLeftContainer">
                            <div id="FirstNameContainer">
                                <p id="FirstNameTitle">First Name *</p>
                                <input id="FirstNameInput" type="text" name="name" required/>
                            </div>
                            <div id="LastNameContainer">
                                <p id="LastNameTitle">Last Name *</p>
                                <input id="LastNameInput" type="text" name="name" required/>
                            </div>
                            <div id="EmailContainer">
                                <p id="EmailTitle">Email *</p>
                                <input id="EmailInput" type="text" name="email" required/>
                            </div>
                            <div id="CompanyContainer">
                                <p id="CompanyTitle">Company *</p>
                                <input id="CompanyInput" type="text" name="phone" required/>
                            </div>
                        </div>
                        <div id="FormRightContainer">
                            <div id="MessageContainer">
                                <p id="MessageTitle">Message *</p>
                                <input id="MessageInput" type="text" name="message" required/>
                            </div>
                        </div>
                        <div id="FormButtonContainer">
                            <button type="submit"><a id="FormButton" href="/sponsors">Send</a></button>
                        </div>
                    </form>
                </div>
            </div>
        <style>
            {`
                #SponsorForm {
                    display: flex;
                    position: relative;
                    width: 99.7vw;
                    height: 100vh; 
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid red;
                }
                #SponsorFormContainer {
                    display: flex;
                    position: relative;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #SponsorsFormHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 30%;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid red;

                }
            `}
        </style>
        </div>
    )
}