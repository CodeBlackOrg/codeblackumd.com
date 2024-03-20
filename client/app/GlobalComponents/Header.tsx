import React from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { SiLinktree } from "react-icons/si";

export default function Header() {
    
    return (
        <div id="Header">
            <div id="HeaderContainer">
                <div id="HeaderBarsContainer"><FaBars /></div>
                <div id="HeaderCloseContainer"><IoMdClose /></div>
                <div id="HeaderLeftContainer">
                    <div id="HeaderImageContainer">
                        <img id="HeaderImage" src="CodeBlackLogo.webp" alt="Code Black Logo" />
                    </div>
                </div>
                <div id="HeaderRightContainer">
                    <ul id="HeaderListContainer">
                        <li className="HeaderListItem">About Us</li>
                        <li className="HeaderListItem">Events & Resources</li>
                        <li className="HeaderListItem">Sponsors</li>
                        <li className="HeaderListItem"><SiLinktree /></li>
                    </ul>
                </div>
            </div>
            <style>
                {`
                    #Header {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 10vh;
                    }
                    
                    #HeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        justify-content: center;
                        border: 1px solid green;
                    }

                    #HeaderBarsContainer {
                        display: flex;
                        position: relative;
                        justify-content: center;
                        align-items-center;
                    }

                    #HeaderLeftContainer {
                        display: flex;
                        position: relative;
                        width: 30%;
                        height: 100%;
                        align-items: center;
                    }
                    
                    #HeaderImageContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 90%;

                    }

                    #HeaderImage {

                    }

                    #HeaderRightContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 90%;
                        align-items: center;
                    }

                    #HeaderListContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        align-items: center;
                        justify-content: space-around;
                    }

                    .HeaderListItem {
                        display: flex;
                        text-decoration: none;
                    }

                    @media (max-width: 600px) {
                        
                    }
            `}
            </style>
        </div>
    )
}