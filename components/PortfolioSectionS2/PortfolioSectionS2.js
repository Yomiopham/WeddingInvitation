import React from 'react'
import pImg1 from '/public/images/portfolio/7.jpg'
import pImg2 from '/public/images/portfolio/8.jpg'
import pImg3 from '/public/images/portfolio/9.jpg'
import pImg4 from '/public/images/portfolio/10.jpg'
import pImg5 from '/public/images/portfolio/30.jpg'
import pImg6 from '/public/images/portfolio/11.jpg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image'

const images = [
    pImg1,
    pImg2,
    pImg3,
    pImg4,
    pImg5,
    pImg6,
]

const PortfolioSectionS2 = (props) => {

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

    return (

        <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
            <div className="container-fluid">
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                                    <Masonry columnsCount={4} gutter="30px">
                                        {images.map((item, pitem) => (
                                            <div className="grid" key={pitem}>
                                                <div className="img-holder" key={item} onClick={() => setOpen(true)}>
                                                    <Image src={item} alt="" />
                                                    <div className="hover-content">
                                                        <i className="ti-plus"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>
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

export default PortfolioSectionS2;