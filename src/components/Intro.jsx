import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Altair Aguelo TESTING CI CD</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Aspiring Software Engineer & 3rd Year Computer Science Major at UCSD</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Aspiring software developer with proficiency in coding and 
                experience in computer science outreach. Driven by a passion for 
                computer science, I am committed to enhancing my skills and knowledge 
                through hands-on projects and real-world experience, striving to excel 
                and make meaningful contributions in the field, as well as make 
                technology more accessible through the things I program. 
                <br></br>
                Check out some of my work on my {' '}
                <a
                    href="https://github.com/altairaguelo"
                    target = "_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2
                    decoration-blue-600"
                    rel="noreferrer noopener"
                >
                    Github
                </a>
                !
            </p>
        </div>
    )
}

export default Intro;