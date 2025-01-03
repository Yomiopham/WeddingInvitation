import React from 'react'
import { Slide } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/event/7.jpg'
import sImg2 from '/public/images/event/8.jpg'
import sImg3 from '/public/images/event/9.jpg'
import LocationMap from './Modal'
import Image from 'next/image';


const Events = [
    {
        Simg: sImg1,
        title: 'The Reception',
        li1: 'Monday, 12 Apr. 2023 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
        animation: '1200',
    },
    {
        Simg: sImg2,
        title: 'The Ceremony',
        li1: 'Monday, 12 Apr. 2023 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
        animation: '1400',
    },
    {
        Simg: sImg3,
        title: 'The Party',
        li1: 'Monday, 12 Apr. 2023 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
        animation: '1600',
    },

]

const EventSectionS3 = (props) => {
    return (
        <section className="wpo-event-section-s3 section-padding" id="event">
            <div className="container">
                <SectionTitle subTitle={'Our Wedding'} MainTitle={'When & Where'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <div className="wpo-event-img-inner">
                                                <Image src={event.Simg} alt="" />
                                            </div>
                                        </div>
                                        <div className="wpo-event-text">
                                            <div className="title">
                                                <h2>{event.title}</h2>
                                            </div>
                                            <ul>
                                                <li>{event.li1}</li>
                                                <li>{event.li2}</li>
                                                <li>{event.li3}</li>
                                                <li><LocationMap /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSectionS3;