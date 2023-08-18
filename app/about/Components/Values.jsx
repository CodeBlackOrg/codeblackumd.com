import React from "react";

export default function Values() {
    
    return (
        <div id="Values">
            <div id="ValuesContainer">
                <div id="ImagesContainer">
                    <div id="Image1Container">
                          <img id="image1"src="AboutBanner1.webp"/>  
                    </div>
                    <div id="Image2Container">
                        <img id="image2"src="AboutBanner2.webp"/> 
                    </div>
                    <div id="Image3Container">
                        <img id="image3"src="AboutBanner3.webp"/>
                    </div>
                    <div id="Image4Container">
                        <img id="image4"src="AboutBanner4.webp"/>
                    </div>
                </div>
                <div id="ValuesTextContainer">
                    <div id="ValuesTitleContainer">
                        <p id="ValuesTitle">our values</p>
                    </div>
                    <div id="ValuesSeperatorContainer">
                        <div id="ValuesSeperator"/>
                    </div>
                    <div id="ValuesCommunityContainer">
                        <div id="ValuesCommunityTitleContainer">
                            <p id="ValuesCommunityTitle">COMMUNITY BUILDING</p>
                        </div>
                        <div id="ValuesCommunityParagraphContainer">
                            <p id="ValuesCommunityParagraph">Before anything, we are a community. As such, we strive to make Code: BLACK an inclusive and comfortable environment for everyone within our club.</p>
                        </div>
                    </div>
                    <div id="ValuesCultureContainer">
                        <div id="ValuesCultureTitleContainer">
                            <p id="ValuesCultureTitle">CULTURE</p>
                        </div>
                        <div id="ValuesCultureParagraphContainer">
                            <p id="ValuesCultureParagraph">Our organization surrounds itself with attitudes and behaviors thatencourage fun, creativity, and evolution. Our mission to bridge the gap between marginalized groups and tech necessitates the need for candid and genuine conversations. We believe that these conversations will yield real-life solutions. As an organization focused on the success of minorities in tech, It is with pride that we lay claim to our identities in our earned spaces.</p>
                        </div>
                    </div>
                    <div id="ValuesImpactContainer">
                        <div id="ValuesImpactTitleContainer">
                            <p id="ValuesImpactTitle">IMPACT</p>
                        </div>
                        <div id="ValuesImpactParagraphContainer">
                            <p id="ValuesImpactParagraph">Code: BLACK is also committed to helping our community secure jobs, internships, and other opportunities to advance their careers and future.</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    #Values {
                        display: flex; 
                        position: relative;
                        width: 99.7vw;
                        height: 130vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #ValuesContainer {
                        display: flex;
                        position: relative;
                        width: 98%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #ImagesContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid red;
                    }
                    #Image1Container, #Image2Container, #Image3Container, #Image4Container {
                        display: flex;
                        position: relative;
                        width: 25%;
                        height: 100%;
                        object-fit: contain;
                        overflow: hidden;
                    }
                    #image1, #image2, #image3, #image4 {
                        width: 100%;
                        height: 100%;
                    }
                    #ValuesTextContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 80%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid red;

                    }
                    #ValuesTitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 5%;
                        justify-content: center;
                        align-items: center;
                    }
                    #ValuesTitle {
                        font-size: 40px;
                        font-family:  test;
                        text-align: center;
                    }
                    #ValuesSeperatorContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 5%;
                        justify-content: center;
                        align-items: center;
                    }
                    #ValuesSeperator {
                        width: 50px;
                        height: 0px;
                        border: 1px solid black;

                    }
                    #ValuesCommunityContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                    }
                    #ValuesCommunityTitleContainer{
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 5%;
                        justify-content: center;
                        align-items: center;

                    }
                    #ValuesCommunityTitle{
                        font-size: 17px;
                        font-family:  test;
                        text-align: center;

                    }
                    #ValuesCommunityParagraphContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        justify-content: center;
                        align-items: center;


                    }
                    #ValuesCommunityParagraph {
                        font-size: 17px;
                        font-family:  test;
                        text-align: center;

                    }
                    #ValuesCultureContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 30%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #ValuesCultureTitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 5%;
                        justify-content: center;
                        align-items: center;
                    }
                    #ValuesCultureTitle {
                        font-size: 17px;
                        font-family:  test;
                        text-align: center;
                    }
                    #ValuesImpactContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #ValuesImpactTitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 5%;
                        justify-content: center;
                        align-items: center;
                    }
                    #ValuesImpactTitle {
                        font-size: 17px;
                        font-family:  test;
                        text-align: center;
                    }
                    #ValuesImpactParagraphContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                    }
                    #ValuesImpactParagraph {
                        font-size: 17px;
                        font-family:  test;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    )
}