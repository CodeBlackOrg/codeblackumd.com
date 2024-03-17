import React from "react";

export default function Hero() {
    
    return (
        <div id="Hero">
            <div id="HeroContainer">
                <div id="HeroBackgroundContainer">
                    <img id="HeroBackgroundImage" src="HeroBackground.webp" alt="Background Image" />
                    <div id="HeroTextImageContainer">
                        <img id="HeroTextImage" src="HeroText.webp" alt="Code Black Text" />
                    </div>
                </div>
            </div>
            <style>
                {`
                    #Hero {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 100vh;
                    }
                    
                    #HeroContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                    }
                    
                    #HeroBackgroundContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }

                    #HeroBackgroundImage {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        filter: brightness(55%);
                    }

                    #HeroTextImageContainer {
                        display: flex;
                        position: absolute;
                        width: 40%;
                        height: 30%;
                        justify-content: center;
                        align-items: center;
                    }

                    #HeroTextImage {
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </div>
    )
}