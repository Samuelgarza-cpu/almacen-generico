import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head } from '@inertiajs/react';
import React from 'react';


const Page2 = () => {
    return (
        <>
            <Head title="DIF" />
            <div className="is-preload">
                <div id="page-wrapper">
                    {/* Header */}
                    <div id="header">
                        {/* Logo */}
                        <h1>
                            <a href="index.html" id="logo">
                                DIF <em>TRANSPARENCIA</em>
                            </a>
                        </h1>

                        {/* Nav */}
                        <nav id="nav">
                            <ul>
                                <li className="current"><a href="#">INICIO</a></li>
                                <li><a href="#antecedentes">ANTECEDENTES</a></li>
                                <li ><a href="#conta-gubernamental">CONTABILIDAD GUBERNAMENTAL</a></li>
                                {/* <li>
                                <a href="#">Dropdown</a>
                                <ul>
                                    <li><a href="#">Lorem dolor</a></li>
                                    <li><a href="#">Magna phasellus</a></li>
                                    <li><a href="#">Etiam sed tempus</a></li>
                                    <li>
                                        <a href="#">Submenu</a>
                                        <ul>
                                            <li><a href="#">Lorem dolor</a></li>
                                            <li><a href="#">Phasellus magna</a></li>
                                            <li><a href="#">Magna phasellus</a></li>
                                            <li><a href="#">Etiam nisl</a></li>
                                            <li><a href="#">Veroeros feugiat</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Veroeros feugiat</a></li>
                                </ul>
                            </li> */}

                                {/* <li><a href="right-sidebar.html">Right Sidebar</a></li>
                                <li><a href="two-sidebar.html">Two Sidebar</a></li>
                                <li><a href="no-sidebar.html">No Sidebar</a></li> */}
                            </ul>
                        </nav>
                    </div>

                    {/* Banner */}
                    <section id="banner">
                        <header>
                            {/* <h2>
                            DIF:  <a href="https://dif.gomezpalacio.gob.mx">Pagina Principal</a>
                        </h2> */}
                            <a href="https://dif.gomezpalacio.gob.mx" target='blank' className="button">
                                PAGINA PRINCIPAL
                            </a>
                        </header>
                    </section>

                    {/* Antecedentes */}
                    <section id='antecedentes' className="wrapper style1">
                        <div className="container">
                            <div className="row gtr-200">
                                {/* <section className="col-4 col-12-narrower">
                                    <div className="box highlight">
                                        <i className="icon solid major fa-paper-plane"></i>
                                        <h3>This Is Important</h3>
                                        <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
                                    </div>
                                </section>
                                <section className="col-4 col-12-narrower">
                                    <div className="box highlight">
                                        <i className="icon solid major fa-pencil-alt"></i>
                                        <h3>Also Important</h3>
                                        <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
                                    </div>
                                </section>
                                <section className="col-4 col-12-narrower">
                                    <div className="box highlight">
                                        <i className="icon solid major fa-wrench"></i>
                                        <h3>Probably Important</h3>
                                        <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
                                    </div>
                                </section> */}
                                <div className='w-full text-center '>
                                    <h1>ANTECEDENTES</h1>
                                </div>
                                <p>La asistencia social en México ha existido desde antes de la llegada de los españoles. Los pueblos prehispánicos desarrollaron acciones de protección para los más necesitados, como viudas y huérfanos. Desde ese entonces hasta el presente, la asistencia social ha ido cambiando.</p>
                                <p>Durante gran parte del siglo XX y hasta la actualidad, se pueden identificar grandes acciones en la asistencia social. Destaca por su trascendencia el Programa de «La Gota de Leche», que en 1929 aglutinaba a un sector de mujeres mexicanas quienes se encargaban de proporcionar alimento a niñas y niños pobres de la Ciudad de México. Ello dio origen a la creación de la Asociación Nacional de Protección a la Infancia, lo que permitió dar mayor orden a las acciones de asistencia pública.</p>
                                <p>A partir de 1943, se integró la Subsecretaría de Asistencia Pública dentro de la recién creada Secretaría de Salubridad y Asistencia, la cual fusionaba las actividades de la entonces Secretaría de Asistencia Pública con las del Departamento de Salubridad. Es entonces cuando se da relevancia al concepto de asistencia social, entendido como una obligación social a cargo del Estado.</p>
                                <p>El 1° de febrero de 1961 se creó el Instituto Nacional de Protección a la Infancia (INPI), iniciando actividades con la ampliación de los servicios de alimentación infantil en escuelas primarias del Distrito Federal. Durante esta época, se sensibilizó a las mujeres para que integraran comités en el ámbito nacional a fin de llevar los beneficios de la alimentación a todos los niños con carencias. Se impulsó la integración familiar a través del desarrollo comunitario.</p>
                                <p>Sin embargo, el INPI tenía la limitación de ser un organismo encargado de proporcionar raciones alimenticias para complementar la alimentación de los infantes, lo cual le impedía atender otros aspectos de la problemática social, como menores abandonados y en situación de riesgo, que fueron relegados o atendidos con notables insuficiencias.</p>
                                <p>Por ello, en 1968 se creó una institución para colaborar con los trabajos y programas de asistencia especializada en atender a menores abandonados, huérfanos o en condiciones especialmente difíciles, todos ellos en circunstancia de riesgo en su salud física y equilibrio emocional. Esta institución llevó el nombre de Instituto Mexicano de Asistencia a la Niñez (IMAN).</p>

                                <section className="col-6 col-12-narrower">
                                    <div className="box highlight">
                                        <i className="icon solid major fa-paper-plane"></i>
                                        <h3>Resumen</h3>
                                        <p><strong>Asistencia Social</strong></p>
                                        <p>Con la creación del Sistema Nacional de Asistencia Social se lleva la asistencia social al ámbito municipal a partir del establecimiento de los Sistemas Municipales para el Desarrollo Integral de la Familia, mejor conocidos como DIF municipales.</p>
                                        <p>La descentralización de la asistencia social en el municipio (municipalización) busca, entre otros propósitos:</p>
                                        <ul>
                                            <li>Mayor coordinación y equilibrio en el desarrollo de las acciones asistenciales a nivel nacional.</li>
                                            <li>Fortalecer la organización y operación de los sistemas DIF municipales.</li>
                                            <li>Llevar los servicios asistenciales hasta el último rincón del territorio nacional.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="col-6 col-12-narrower">
                                    <div className="box highlight">
                                        <i className="icon solid major fa-paper-plane"></i>
                                        <FontAwesomeIcon icon="fa-brands fa-react" />
                                        <h3>Estrategias</h3>
                                        <ul>
                                            <li> La prevención, que está encaminada a detectar los factores de riesgo de vulnerabilidad y establecer programas, proyectos, servicios y acciones participación activa del sujeto atendido de tal manera que la responsabilidad de la intervención sea compartida.</li>
                                            <li>La corresponsabilidad, ésta se puede definir en dos aspectos. Uno, el relacionado directamente con el sujeto beneficiario de la asistencia social; en este sentido, el sujeto debe contribuir de manera activa en su propia reincorporación social. Deja de ser pasivo, simple receptor de atención asistencial, y se convierte en protagonista.</li>
                                            <li>La profesionalización de los servicios y de quienes los proporcionan, está dirigida a recuperar experiencias y producir conocimiento. También, a formar y capacitar en todos los niveles y ámbitos de acción para establecer, por un lado, parámetros mínimos de calidad y una operación planificada, tendiente a combatir las causas y no los efectos.</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>

                    {/* Titulo Contabilidad Gubernamental */}
                    <section id='conta-gubernamental' className="wrapper style2">
                        <div className="container">
                            <header className="major">
                                <h2>CONTABILIDAD GUBERNAMENTAL</h2>
                                <p>DIF TRANSPARENCIA</p>
                            </header>
                        </div>
                    </section>

                    {/* Archivos */}
                    <section className="wrapper style1">
                        <div className="container">
                            <div className="row">
                                <section className="col-6 col-12-narrower">
                                    <div className="box post">
                                        <img src="/logo2.jpg" alt="" className="image left" />
                                        <div className="inner">
                                            <h3>2024</h3>
                                            <p>-Archivos</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="col-6 col-12-narrower">
                                    <div className="box post">

                                        <img src="/logo2.jpg" alt="" className="image left" />

                                        <div className="inner">
                                            <h3>2025</h3>
                                            <p>-Archivos</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* <div className="row">
                                <section className="col-6 col-12-narrower">
                                    <div className="box post">
                                        <a href="#" className="image left">
                                            <img src="images/pic03.jpg" alt="" />
                                        </a>
                                        <div className="inner">
                                            <h3>The Third Thing</h3>
                                            <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="col-6 col-12-narrower">
                                    <div className="box post">
                                        <a href="#" className="image left">
                                            <img src="images/pic04.jpg" alt="" />
                                        </a>
                                        <div className="inner">
                                            <h3>The Fourth Thing</h3>
                                            <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
                                        </div>
                                    </div>
                                </section>
                            </div> */}
                        </div>
                    </section>


                    {/* Separacion */}
                    {/* <section id="cta" className="wrapper style3">
                        <div className="container">
                            <header>
                                <h2>Are you ready to continue your quest?</h2>
                                <a href="#" className="button">
                                    Insert Coin
                                </a>
                            </header>
                        </div>
                    </section> */}

                    {/* Footer */}
                    <div id="footer">
                        {/* <div className="container">
                            <div className="row">
                                <section className="col-3 col-6-narrower col-12-mobilep">
                                    <h3>Links to Stuff</h3>
                                    <ul className="links">
                                        <li><a href="#">Mattis et quis rutrum</a></li>
                                        <li><a href="#">Suspendisse amet varius</a></li>
                                        <li><a href="#">Sed et dapibus quis</a></li>
                                        <li><a href="#">Rutrum accumsan dolor</a></li>
                                        <li><a href="#">Mattis rutrum accumsan</a></li>
                                        <li><a href="#">Suspendisse varius nibh</a></li>
                                        <li><a href="#">Sed et dapibus mattis</a></li>
                                    </ul>
                                </section>
                                <section className="col-3 col-6-narrower col-12-mobilep">
                                    <h3>More Links to Stuff</h3>
                                    <ul className="links">
                                        <li><a href="#">Duis neque nisi dapibus</a></li>
                                        <li><a href="#">Sed et dapibus quis</a></li>
                                        <li><a href="#">Rutrum accumsan sed</a></li>
                                        <li><a href="#">Mattis et sed accumsan</a></li>
                                        <li><a href="#">Duis neque nisi sed</a></li>
                                        <li><a href="#">Sed et dapibus quis</a></li>
                                        <li><a href="#">Rutrum amet varius</a></li>
                                    </ul>
                                </section>
                                <section className="col-6 col-12-narrower">
                                    <h3>Get In Touch</h3>
                                    <form>
                                        <div className="row gtr-50">
                                            <div className="col-6 col-12-mobilep">
                                                <input type="text" name="name" id="name" placeholder="Name" />
                                            </div>
                                            <div className="col-6 col-12-mobilep">
                                                <input type="email" name="email" id="email" placeholder="Email" />
                                            </div>
                                            <div className="col-12">
                                                <textarea name="message" id="message" placeholder="Message" rows="5"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input type="submit" className="button alt" value="Send Message" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div> */}

                        {/* Icons */}
                        {/* <ul className="icons">
                            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                            <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                            <li><a href="#" className="icon brands fa-google-plus-g"><span className="label">Google+</span></a></li>
                        </ul> */}

                        {/* Copyright */}
                        <div className="copyright">
                            <ul className="menu">
                                <li>&copy; Derechos Reservados DIF GOMEZ PALACIO</li>
                                <li>Design: <a href="http://manada.digital">MANADA DIGITAL</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Page2;