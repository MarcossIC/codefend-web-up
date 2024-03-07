import { team } from "../../../data"
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import useSliderTeam from "../../../hooks/sliderTeam";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const breakPoints = {
    2300: {
        slidesPerView: 4,
        spaceBetween: 40
    },
    2000: {
        slidesPerView: 4,
        spaceBetween: 40
    },
    1550: {
        slidesPerView: 3,
        spaceBetween: 40
    },
    1000: {
        slidesPerView: 2,
        spaceBetween: 40
    },
    200: {
        slidesPerView: 1,
        spaceBetween: 20
    }
}

const FirstSlider = () => {

    const {indexActive,
           handleSlide, 
           selectCard} = useSliderTeam('slider-1')

    return (
        <div id="slider-1" className="container-1">
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            breakpoints={breakPoints}
            onSlideChange={window.innerWidth < 600 ? handleSlide : () => { }}
        >
            {
                team[0].map((member, i) => {
                    return (
                        <SwiperSlide key={i}>
                            {/* <CardMembers key={i} member={member} index={i} select={SelectCard}/> */}
                            <div
                                onClick={window.innerWidth > 600 ? () => selectCard(i) : () => { }}
                                className={`card ${i === indexActive && window.innerWidth < 600 ? 'active' : ''}`}>
                                <img loading="lazy" src={member.image} alt={` ${member.name}`} />
                                <p>
                                    <span><b>{member.name}</b></span><br />
                                    Rol: {member.rol} <br />
                                    Profile:<br />
                                    <a href={`https://${member.profile}`} target="_blank">{member.profile}</a> <br />
                                    Experience: {member.experience}
                                </p>
                            </div>
                        </SwiperSlide>

                    )
                })
            }
        </Swiper>
        
            <div className="profile-contain">
                <div id="chris" className="profile showprofile">
                    <img src="../assets/images/bkg-chris.png" alt="image-chris" />

                    <div className="information">
                        <h2>Christian 'Ch' Russo</h2>
                        <span>OFFENSIVE SECURITY RESEARCH</span>
                        <div className="text">
                            <h3>Profesional Summary</h3>
                            <p>Based on the information provided and the search results, it appears that Christian "ch" Russo is a hacker who has been involved in several high-profile security breaches. However, due to the limitations in accessing the LinkedIn profile and other direct sources, the following resume is constructed based on the information available from the KrebsOnSecurity articles and other related content. <br /><br />
                                Christian "ch" Russo is a security researcher and hacker known for exposing vulnerabilities in major websites. With a background in coding in PHP and using SQL databases, Russo has demonstrated a deep understanding of web security and the implications of data breaches.</p>
                            <h3>Key Achievements</h3>
                            <p>Identified and exposed security flaws in The Pirate Bay's database, gaining access to user information including usernames and hashed passwords (3) - Contacted eHarmony offering to sell security services to help the company fix security flaws, which eHarmony declined (11) - Involved in a security breach at PlentyOfFish.com, although the details of this involvement are not specified in the search results.</p>
                        </div>
                    </div>
                </div>
                <div id="edgardo" className="profile">
                    <img loading="lazy" src="../assets/images/bkg-edgardo.png" alt="image-edgardo" />
                    <div className="information">
                        <h2>Edgardo Krauser</h2>
                        <span>CIBER SECURITY</span>
                        <div className="text">
                            <h3>Profesional Summary</h3>
                            <p>Edgardo Krause is an experienced Senior Security Engineer with a focus on cybersecurity and penetration testing. He specializes in identifying and mitigating security vulnerabilities in web applications, mobile applications, and network infrastructure. With a strong background in security research, testing automation, and software development, Edgardo is dedicated to staying ahead of emerging threats and trends in the field. He has a proven track record in contributing to global security efforts and has worked on various penetration testing and red teaming engagements. <br /><br />
                                He  holds publics recognitions from differentes companies and governaments, among them the US Department of State and the CERN.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="ignacio" className="profile">
                    <img loading="lazy" src="../assets/images/bkg-ignacio.png" alt="image-ignacio" />
                    <div className="information">
                        <h2>Ignacio Gómez</h2>
                        <span>EXPERT IN USER BEHAVIOR AND INTERFACES</span>
                        <div className="text">
                            <h3>Professional Summary</h3>
                            <p>Ignacio Gómez is a distinguished expert specializing in the intricate field of user behavior and interfaces. His expertise lies in the strategic application of behavioral science to interface design, enabling a profound understanding of user interactions with digital environments. Gómez possesses a unique blend of technical acumen and psychological insight, making him adept at predicting and influencing user behavior through interface design.<br /><br />
                                Throughout his career, Gómez has been instrumental in conducting advanced human behavior research at major corporations. His work primarily involves dissecting complex user interactions and employing this knowledge to enhance interface design, thereby subtly guiding user actions and decisions. His approach is deeply rooted in technical sophistication, focusing on the psychological aspects of user interaction rather than mere aesthetic design.</p>
                            <h3>Key Achievements</h3>
                            <p>Developed sophisticated models for predicting user behavior, significantly enhancing user engagement and satisfaction - Pioneered research methods in user behavior analysis, leading to groundbreaking insights in interface usability - Successfully implemented strategies for user behavior manipulation through interface design, resulting in improved business outcomes for several large-scale corporations.</p>
                        </div>
                    </div>

                </div>
                <div id="hemsleek" className="profile">
                    <img loading="lazy" src="../assets/images/bkg-hems.png" alt="image-hems" />
                    <div className="information">
                        <h2>Asiyanbi 'Am' Mubashir</h2>
                        <span>FRONTEND SOFTWARE ENGINEER</span>
                        <div className="text">
                            <h3>Professional Summary</h3>
                            <p>From Nigeria, Asiyanbi "Am" Mubashir excels in frontend development with SolidJS, ReactJS, and React Native with Expo. Passionate about TypeScript and Firebase, his work is characterized by responsive design and scalable applications using Tailwind CSS. With experience in Node.js and Express, as well as Next.js, SASS, and GraphQL, Mubashir combines creativity and technical skill to drive innovation in software development.</p>
                            <h3>Key Achievements</h3>
                            <p>At Codefend.com, he led projects that enhanced user experience. His leadership in mobile development increased user engagement. Academically recognized at the University of Ilorin, his robot car project showcases his technical ingenuity.</p>
                        </div>
                    </div>

                </div>
            </div>
    </div>
    )
}

export default FirstSlider