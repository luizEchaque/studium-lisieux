import React, { useEffect, useState } from 'react';
import AnimatedContent from './components/AnimatedContent.jsx';
import GlassSurface from './components/GlassSurface.jsx';

export default function App() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 900px)').matches);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)');
    function syncNavigation() {
      setIsMobile(media.matches);
      setMenuOpen(false);
    }
    media.addEventListener('change', syncNavigation);
    return () => media.removeEventListener('change', syncNavigation);
  }, []);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        document.querySelector('.menu-toggle')?.focus();
      }
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header">
        <a className="brand" href="#inicio" aria-label="Studium Lisieux, início"><img src={import.meta.env.BASE_URL + 'assets/vetor.svg'} alt="" width="54" height="54" /><span>studium <em>lisieux</em><small>ESTUDO · LÍNGUA · CULTURA</small></span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="navigation" hidden={!isMobile} onClick={() => setMenuOpen(!menuOpen)}>Menu <span aria-hidden="true">☰</span></button>
        <nav hidden={isMobile && !menuOpen} onClick={() => setMenuOpen(false)} id="navigation" aria-label="Navegação principal"><a href="#sobre">O Studium</a><a href="#aprendizado">Aprendizado</a><a href="#professor">Professor</a><a className="nav-cta" href="#contato">Vamos conversar <span aria-hidden="true">↗</span></a></nav>
    </header>
    <main id="conteudo">
        <section className="hero-section" id="inicio" aria-labelledby="hero-title">
        <div className="hero container">
            <AnimatedContent className="hero-copy" distance={100} duration={0.8} stagger={0.08}>
                <p className="eyebrow"><span></span> STUDIUM LISIEUX / INGLÊS</p>
                <h1 id="hero-title">Inglês em<br /><em>perspectiva.</em></h1>
                <p className="placeholder hero-description">Conheça o Studium Lisieux, um espaço dedicado ao estudo da língua inglesa.</p>
                <a className="button" href="#aprendizado">Explore as aulas <span aria-hidden="true">↗</span></a>
            </AnimatedContent>
            <div className="hero-art-backdrop" aria-label="Símbolo do Studium Lisieux">
                <GlassSurface className="hero-art" width="100%" height="auto" borderRadius={22} backgroundOpacity={0.18} saturation={1.2} distortionScale={-100}>
                    <div className="hero-art-content">
                        <div className="art-top"><span>STUDIUM LISIEUX</span><span>FIG. 01</span></div>
                        <div className="emblem"><img src={import.meta.env.BASE_URL + 'assets/vetor-transparente.svg'} alt="Símbolo da plataforma Studium Lisieux" /></div>
                        <div className="art-bottom"><span>Língua inglesa</span><span className="art-star" aria-hidden="true">↗</span></div>
                    </div>
                </GlassSurface>
            </div>
            <a className="scroll-link" href="#sobre"><span aria-hidden="true">↓</span> UM CONVITE A APRENDER</a>
        </div>
        <footer className="ribbon" aria-hidden="true"><span>LÍNGUA</span><i>|</i><span>CULTURA</span><i>|</i><span>CONEXÃO</span><i>|</i><span>DESCOBERTA</span><i>|</i><span>STUDIUM LISIEUX</span></footer>
        </section>
        <AnimatedContent as="section" distance={100} duration={0.8} stagger={0.08} className="section container about" id="sobre" aria-labelledby="sobre-title"><div><p className="eyebrow">01 / O STUDIUM</p><h2 id="sobre-title">Aprender é abrir<br /><em>novos horizontes.</em></h2></div><div className="section-copy"><span className="section-mark" aria-hidden="true">↗</span><p className="placeholder">Espaço reservado para a apresentação da plataforma, sua história e o que inspira o Studium Lisieux.</p><p className="editing-note">Apresentação em breve.</p></div></AnimatedContent>
        <AnimatedContent as="section" distance={100} duration={0.8} stagger={0.08} className="learning" id="aprendizado" aria-labelledby="aprendizado-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">02 / APRENDIZADO</p><h2 id="aprendizado-title">Cada caminho tem<br /><em>um começo.</em></h2></div><p className="placeholder">Aqui vamos apresentar a proposta<br />de ensino e os formatos das aulas.</p></div><div className="learning-grid"><article><span className="card-number">I.</span><h3>A proposta</h3><p className="placeholder">Espaço para apresentar a abordagem de ensino.</p><span className="card-symbol" aria-hidden="true">|</span></article><article><span className="card-number">II.</span><h3>As aulas</h3><p className="placeholder">Espaço para apresentar os formatos e a dinâmica das aulas.</p><span className="card-symbol" aria-hidden="true">↗</span></article><article><span className="card-number">III.</span><h3>O seu percurso</h3><p className="placeholder">Espaço para apresentar as etapas do aprendizado.</p><span className="card-symbol" aria-hidden="true">∞</span></article></div></div></AnimatedContent>
        <AnimatedContent as="section" distance={100} duration={0.8} stagger={0.08} className="section container teacher" id="professor" aria-labelledby="professor-title"><div className="portrait-placeholder"><span aria-hidden="true">SL</span><p>ESPAÇO PARA A FOTO DO PROFESSOR</p></div><div><p className="eyebrow">03 / QUEM ENSINA</p><h2 id="professor-title">Conheça quem vai<br /><em>caminhar com você.</em></h2><p className="placeholder">Espaço reservado para a apresentação do professor, sua trajetória e sua relação com o ensino de inglês.</p><p className="editing-note">Biografia em breve.</p></div></AnimatedContent>
        <AnimatedContent as="section" distance={100} duration={0.8} stagger={0.08} className="contact" id="contato" aria-labelledby="contato-title"><div className="container contact-inner"><p className="eyebrow">04 / VAMOS CONVERSAR</p><h2 id="contato-title">Todo novo capítulo<br />começa com um <em>olá.</em></h2><p>Em breve, um canal para conhecer melhor o Studium Lisieux.</p><span className="contact-status">CONTATO EM BREVE <span aria-hidden="true">↗</span></span></div><span className="contact-decoration" aria-hidden="true">|</span></AnimatedContent>
    </main>
    <footer className="container footer"><a className="footer-brand" href="#inicio">studium <em>lisieux</em></a><span>© {new Date().getFullYear()} Studium Lisieux</span><a href="#inicio">Voltar ao início ↑</a></footer>
</>);
}