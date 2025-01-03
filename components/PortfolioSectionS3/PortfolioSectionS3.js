import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import pImg1 from '/public/images/portfolio/18.jpg'
import pImg2 from '/public/images/portfolio/19.jpg'
import pImg3 from '/public/images/portfolio/20.jpg'
import pImg4 from '/public/images/portfolio/21.jpg'
import pImg5 from '/public/images/portfolio/22.jpg'
import pImg6 from '/public/images/portfolio/23.jpg'
import pImg7 from '/public/images/portfolio/24.jpg'
import pImg8 from '/public/images/portfolio/25.jpg'
import pImg9 from '/public/images/portfolio/29.jpg'
import pImg10 from '/public/images/portfolio/24.jpg'
import pImg11 from '/public/images/portfolio/25.jpg'
import pImg12 from '/public/images/portfolio/26.jpg'
import pImg13 from '/public/images/portfolio/27.jpg'
import pImg14 from '/public/images/portfolio/28.jpg'
import pImg15 from '/public/images/portfolio/29.jpg'
import pImg16 from '/public/images/portfolio/18.jpg'
import pImg17 from '/public/images/portfolio/19.jpg'
import pImg18 from '/public/images/portfolio/20.jpg'
import Image from 'next/image';


const images = [
    pImg1,
    pImg2,
    pImg3,
    pImg4,
    pImg5,
    pImg6,
    pImg7,
    pImg8,
    pImg9,
    pImg10,
    pImg11,
    pImg12,
    pImg13,
    pImg14,
    pImg15,
    pImg16,
    pImg17,
    pImg18,
]


const Portfolios = [
    {
        Pimg: pImg1,
        style: "s1",
    },
    {
        Pimg: pImg2,
        style: "s2",
    },
    {
        Pimg: pImg3,
        style: "s3",
    },
    {
        Pimg: pImg4,
        style: "s4",
    },
    {
        Pimg: pImg5,
        style: "s5",
    },
    {
        Pimg: pImg6,
        style: "s6",
    },
    {
        Pimg: pImg7,
        style: "s7",
    },
    {
        Pimg: pImg8,
        style: "s8",
    },
    {
        Pimg: pImg9,
        style: "s9",
    },
    {
        Pimg: pImg10,
        style: "s1",
    },
    {
        Pimg: pImg11,
        style: "s2",
    },
    {
        Pimg: pImg12,
        style: "s3",
    },
    {
        Pimg: pImg13,
        style: "s4",
    },
    {
        Pimg: pImg14,
        style: "s5",
    },
    {
        Pimg: pImg15,
        style: "s6",
    },
    {
        Pimg: pImg16,
        style: "s7",
    },
    {
        Pimg: pImg17,
        style: "s8",
    },
    {
        Pimg: pImg18,
        style: "s9",
    }

]

const PortfolioSectionS3 = (props) => {

    const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
    const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

    function nextImageUrl(src, size) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
    }

    const slides = images.map(({ src, width, height }) => ({
        width,
        height,
        src: nextImageUrl(src, width),
        srcSet: imageSizes
            .concat(...deviceSizes)
            .filter((size) => size <= width)
            .map((size) => ({
                src: nextImageUrl(src, size),
                width: size,
                height: Math.round((height / width) * size),
            })),
    }));

    const [open, setOpen] = React.useState(false);


    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        loop: false,
        autoplay: true,
        rtl: false,
        responsive: false,
    };
    const settings2 = {
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        loop: false,
        autoplay: true,
        rtl: true,
        responsive: false,
    };

    return (
        <section className="wpo-portfolio-section-s4 section-padding pb-0">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-grids gallery-container clearfix gallery-slide">
                            <Slider {...settings}>
                                {Portfolios.slice(0, 9).map((image, i) => (
                                    <div className={`grid ${image.style}`} key={i}>
                                        <div className="img-holder" onClick={() => setOpen(true)}>
                                            <Image src={image.Pimg} alt="" className="img img-responsive" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="portfolio-grids gallery-container clearfix gallery-slide2">
                            <Slider {...settings2}>
                                {Portfolios.slice(9, 18).map((image, i) => (
                                    <div className={`grid ${image.style}`} key={i}>
                                        <div className="img-holder" onClick={() => setOpen(true)}>
                                            <Image src={image.Pimg} alt="" className="img img-responsive" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Zoom]}
            />
        </section>
    )
}

export default PortfolioSectionS3;