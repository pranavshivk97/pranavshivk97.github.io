import React from "react"
import { Chrono } from 'react-chrono'

import { experiences } from "./experiences"

const ReactChronoTimeline = () => {
    const items=[
        {
            title: "June 2022 - Present",
            cardTitle: "Software Engineer II",
            cardSubtitle: "Cisco Systems Inc: RTP, NC",
            cardDetailedText: [
                "Full Stack Developer working in the Automations and Development team", 
                "Developing microservices for Cisco IT utilizing Cisco Unified Callmanagers and Cisco Expressway devices.", 
                "Creating automation tools for Cisco IT engineers using Python, Golang, and React and Docker.", 
                "Designed, implemented and integrated a seamless process to automate backups for Cisco Expressway devices."
            ]
        },
        {
            title: "June 2021 - May 2022",
            cardTitle: "Software Engineer",
            cardSubtitle: "Tata Consultancy Services: Edison, NJ",
            cardDetailedText: [
                "Worked on various projects with the client as a Software Engineer at TCS.",
                "Developed a RESTful API module to update insurance agents and campaign details using C# and ASP.NET",
                "Engineered a robust backend API using ASP.NET Web API and C# to manage user authentication and orders"
            ]
        },
        {
            title: "March 2021 - May 2021",
            cardTitle: "Software Engineer Intern",
            cardSubtitle: "BetterCapital.us: Cupertino, CA (Remote)",
            cardDetailedText: [
                "Solely developed a payment transaction application using the MERN tech stack.",
                "Utilized Stripe ACH and Plaid REST APIs to enable a user to make transactions with credit card or bank account.",
                "Created a user registration module using Passport.js"
            ]
        },
        {
            title: "Feb 2021 - May 2021",
            cardTitle: "Full Stack Development Intern",
            cardSubtitle: "Minos Labs LLC: Jersey City, NJ (Remote)",
            cardDetailedText:  ["Worked as a full stack developer in an Agile Scrum team to implement various front end features and improve the user experience"]
        },
        {
            title: "Sept 2019 - May 2021",
            cardTitle: "Master of Science (M.S.)",
            cardSubtitle: "Rutgers University, New Brunswick, NJ",
            CardDetailedText: ["Major: Software Engineering", "Minor: Data Science"]
        },
        {
            title: "Sept 2015 - June 2019",
            cardTitle: "Bachelor of Engineering (B.E.)",
            cardSubtitle: "PES Institute of Technology, Bangalore, India",
            cardDetailedText: "Electronics and Communications Engineering"
        }
    ]
    return (
        <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            slideShow
            slideItemDuration={500}
            slideShowType="slide_in"
            theme={{
                titleColor: "#03a062",
                titleColorActive: "#03a062", 
                primary: "#03a062", 
                iconBackgroundColor: "#03a062", 
                cardTitleColor: "#03a062", 
                cardSubtitleColor: "#03a062", 
                cardDetailsColor: "#03a062",
                cardBgColor: "#2a2b2b"
            }}
        />
    )
}

export default ReactChronoTimeline;