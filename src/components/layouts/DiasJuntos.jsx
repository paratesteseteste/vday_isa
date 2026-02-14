import styles from './DiasJuntos.module.css';
import Temporizador from './Temporizador';
import anima from '../../styles/animations.module.css'

function DiasJuntos({ time }) {
  // Formata o tempo dinamicamente
  const formatTime = (time) => {
    const { years, months, days, hours, minutes, seconds } = time;
    return `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
  };

  return (
    <div className={`${styles.dias_juntos_container} ${anima.fadeIn_2}`}>
      <h1>Eu te amo Há:</h1>
      <p className={anima.fadeIn_3}>{formatTime(time)}</p>
      <hr />
    </div>
  );
}

export default DiasJuntos;