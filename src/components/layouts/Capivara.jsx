import styles from './Capivara.module.css';
import Button from './Button';
import { useState } from 'react';
import Slider from "react-slick";
import usa1 from '../photos/usa1.jpg';
import usa2 from '../photos/usa2.jpg';
import usa3 from '../photos/usa3.jpg';
import usa4 from '../photos/usa4.jpg';
import usa5 from '../photos/usa5.jpg';
import usa6 from '../photos/usa6.jpg';
import usa7 from '../photos/usa7.jpg';
import usa8 from '../photos/usa8.jpg';
import usa9 from '../photos/usa9.jpg';
import usa10 from '../photos/usa10.jpg';

function Capivara() {
    const [showCapivara, setShowCapivara] = useState(false);
    function toggleCapivara() {
        setShowCapivara(!showCapivara);
    }

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return(
        <div>
            <div className={styles.title_section}>
                <h2 className={styles.couple_title}>Diogo E Isabela</h2>
            </div>
            <Button text="Temporada 2" onClick={toggleCapivara} />
            {showCapivara && 
                <div className={styles.capivara_container}>
                    <div className={styles.capivara_circle}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.photo_carousel}>
                        <Slider {...settings}>
                            <div className={styles.photo_slide}>
                                <img src={usa1} alt="Foto 1" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa2} alt="Foto 2" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa3} alt="Foto 3" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa4} alt="Foto 4" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa5} alt="Foto 5" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa6} alt="Foto 6" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa7} alt="Foto 7" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa8} alt="Foto 8" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa9} alt="Foto 9" />
                            </div>
                            <div className={styles.photo_slide}>
                                <img src={usa10} alt="Foto 10" />
                            </div>
                        </Slider>
                    </div>
                </div>
            }
        </div>
    )
}

export default Capivara;
