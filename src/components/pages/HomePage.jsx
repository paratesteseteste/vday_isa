import { useState, useEffect } from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import SpotifyPlayer from "../layouts/SpotifyPlayer";
import Carrossel from "../layouts/Carrossel";
import DiasJuntos from "../layouts/DiasJuntos";
import Mensagem from "../layouts/Mensagem";
import Capivara from "../layouts/Capivara";
import Temporizador from "../layouts/Temporizador";
import Footer from "../layouts/Footer";


function HomePage() {
    // Data de início: 24 de setembro de 2024 às 19:34
    const START_DATE = new Date('2024-09-24T19:34:00');

    // Função para calcular o tempo desde a data de início
    const calculateTimeSince = () => {
        const now = new Date();
        
        let years = now.getFullYear() - START_DATE.getFullYear();
        let months = now.getMonth() - START_DATE.getMonth();
        let days = now.getDate() - START_DATE.getDate();
        let hours = now.getHours() - START_DATE.getHours();
        let minutes = now.getMinutes() - START_DATE.getMinutes();
        let seconds = now.getSeconds() - START_DATE.getSeconds();
        
        // Ajustes para valores negativos (borrow)
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }
        
        return { years, months, days, hours, minutes, seconds };
    };

    // Estado centralizado do tempo - compartilhado entre DiasJuntos e Temporizador
    const [time, setTime] = useState(calculateTimeSince());

    // Atualiza o tempo inicial quando o componente monta
    useEffect(() => {
        setTime(calculateTimeSince());
    }, []);

    return (
        <ContainerLayout>
            <div style={{ 
                textAlign: 'center', 
                fontSize: '3em', 
                fontWeight: 'bold', 
                margin: '2rem 0',
                color: '#dc143c'
            }}>
                Us ❤️
            </div>
            <Carrossel />
            <SpotifyPlayer />
            <DiasJuntos time={time} />
            <Temporizador time={time} onTimeUpdate={setTime} />
            <Mensagem
                mensagem_p1={"Mais um dia a celebrar o nosso 'nós'."}
                mensagem_p2={"Mais do que uma data comemorativa, o dia de hoje serve para recordar tudo o que vivemos até aqui: os carinhos, os amassos, os desafios superados e as gargalhadas partilhadas. Sou grato por cada segundo vivido e, acima de tudo, por ter conhecido esta menina maravilhosa de metro e meio, a quem hoje chamo, orgulhosamente, de  amor.\n\nQue cada novo dia nos torne ainda mais fortes do que ontem. Continuaremos a caminhar juntos, com leveza e segurança, sabendo que estaremos sempre aqui um para o outro, para o que der e vier. Para sempre, meu amor. Amo-te infinitos. ❤️❤️"}
                remetente="Diogo"
            />
            <Capivara />
            <Footer/>
        </ContainerLayout>
    );
}

export default HomePage;
