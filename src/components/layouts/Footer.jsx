import styles from './Footer.module.css'
import ScrollReveal from 'scrollreveal';
import { useEffect, useRef, useState } from 'react';
import photo3 from '../photos/photo3.jpg';

function Footer(){

    const div_ref = useRef(null)
    const [showImage, setShowImage] = useState(false);

    useEffect(() =>{
        ScrollReveal().reveal(div_ref.current,{
            origin: 'bottom',
            distance: '20px',
            duration: '1000',
            delay: 400,
            easing: 'ease-in-out',
            reset: false
        })
    }, [])

    const handleClick = () => {
        setShowImage(true);
    }

    const handleClose = () => {
        setShowImage(false);
    }

    return(
        <>
            <footer ref={div_ref} className={styles.footer}>
                <span>Desenvolvido pelo: <span className={styles.red_text} onClick={handleClick}> teu maior Amor</span></span>
            </footer>
            
            {showImage && (
                <div className={styles.modal_overlay} onClick={handleClose}>
                    <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.close_button} onClick={handleClose}>×</button>
                        <img src={photo3} alt="Surpresa" className={styles.modal_image} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Footer;