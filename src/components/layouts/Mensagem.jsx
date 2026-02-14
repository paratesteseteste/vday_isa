import styles from './Mensagem.module.css';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';

function Mensagem({ mensagem_p1, mensagem_p2, remetente = "Sua Vida." }) {

  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
   ScrollReveal().reveal(containerRef.current, {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false,
   });
  }, []);

  const handleEnvelopeClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div ref={containerRef} className={styles.mensagem_container}>
        <h1>Até sermos velhinhos</h1>
        
        <div className={styles.envelope_wrapper} onClick={handleEnvelopeClick}>
          <div className={`${styles.envelope} ${isOpen ? styles.open : ''}`}>
            {/* Envelope flap (aba de cima) */}
            <div className={styles.flap}></div>
            <div className={styles.pocket}></div>
            
            {/* Carta que sai do envelope */}
            <div className={`${styles.letter} ${isOpen ? styles.show : ''}`}>
              <div className={styles.letter_content}>
                <p className={styles.first_line}>{mensagem_p1}</p>
                <p>{mensagem_p2}</p>
                <p className={styles.signature}>Com todo o meu coração,</p>
                <p className={styles.signature_name}>{remetente}</p>
              </div>
            </div>
          </div>
          
          {!isOpen && (
            <p className={styles.click_hint}>Clique para abrir 💌</p>
          )}
        </div>
    </div>
  );
}

export default Mensagem;