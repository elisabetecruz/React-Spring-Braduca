import React from "react";
import Leitura1 from "../../assets/img/leitura1/png";
import Evoluir from "../../assets/img/evoluir/png";
import Memoria from "../../assets/img/memoria/png";
import Metodo3 from "../../assets/img/metodo3/png";
import Video from "../../assets/img/video/png";
import Premios from "../../assets/img/premios/png";

export default function Metodologia() {
    return (
        <><div className="container-fluid bg-primary py-5 mb-5">
            <div className="col-md-6 text-center text-md-left">
                <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">MÉTODO DE ENSINO</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
            </div>
        </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">NOSSA METODOLOGIA</h6>
                            <h1 className="mb-4 section-title">Absorver, Entender e Memorizar Para Evoluir</h1>
                            <p>Metodologia focada no aprendizado rápido e habilidade de leitura. As atividades são dispostas de
                                maneira clara e divertida</p>

                        </div>
                        <div className="col-lg-6 pt-5 pt-lg-0">
                            <div className="owl-carousel service-carousel position-relative">
                                <div
                                    className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                                    <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                        <i className="fas fa-book-open" style="font-size:36px"></i>
                                    </div>
                                    <h5 className="font-weight-bold mb-4 px-4">Leitura Dinâmica</h5>
                                    <img src={Leitura1} alt="leitura" />
                                </div>
                                <div
                                    className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                                    <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                        <i className="fas fa-brain" style="font-size:36px"></i>
                                    </div>
                                    <h5 className="font-weight-bold mb-4 px-4">Memorização</h5>
                                    <img src={Memoria} alt="" />
                                </div>
                                <div
                                    className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                                    <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                        <i className="fa fa-2x fa-spa"></i>
                                    </div>
                                    <h5 className="font-weight-bold mb-4 px-4">Evolução Pessoal</h5>
                                    <img src={Evoluir} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classeName="container-fluid py-5">
                <div classeName="container">
                    <div classeName="row align-items-end mb-4">
                        <div classeName="col-lg-6">
                            <h6 classeName="text-secondary font-weight-semi-bold text-uppercase mb-3">ATIVIDADES PRÁTICAS</h6>
                            <h1 classeName="section-title mb-3">O Aluno Terá Acesso à Experiências Diversas </h1>
                        </div>
                        <div classeName="col-lg-6">
                            <h5 classeName="font-weight-normal text-muted mb-3">Além de todos os benefícios para o cérebro, a leitura
                                ajuda a de desenvolver as capacidades ligadas ao aprendizado pois amplia nosso vocabulário, nos
                                faz relembrar regras de ortografia e gramaticais, favorece a melhora da escrita e auxilia no
                                desenvolvimento do nosso senso crítico.</h5>
                        </div>
                    </div>
                   
                        <div classeName="col-lg-4 col-md-6 mb-5">
                            <div classeName="position-relative mb-4">
                                <img classeName="img-fluid rounded w-100" src={Metodo3} alt=""/>
                            </div>
                            <div classeName="d-flex mb-2">
                                <a classeName="text-secondary text-uppercase font-weight-medium" href="">Leitura</a>
                                <span classeName="text-primary px-2">|</span>
                                <a classeName="text-secondary text-uppercase font-weight-medium" href="">Memorização</a>
                            </div>
                            <h5 classeName="font-weight-medium mb-2">Prática da leitura</h5>
                            <p classeName="mb-4">Intrução da rotina da leitura no dia a dia com textos de fácil entendimento.</p>
                        </div>
                        <div classeName="col-lg-4 col-md-6 mb-5">
                            <div classeName="position-relative mb-4">
                                <img classeName="img-fluid rounded w-100" src={Video} alt=""/>
                            </div>
                            <div classeName="d-flex mb-2">
                                <a classeName="text-secondary text-uppercase font-weight-medium" href="">Vídeos</a>
                                <span classeName="text-primary px-2">|</span>
                                <a classeName="text-secondary text-uppercase font-weight-medium" href="">Reels</a>
                            </div>
                            <h5 classeName="font-weight-medium mb-2">Vídeos curtos de Lingua Portuguesa</h5>
                            <p classeName="mb-4">Usando conteúdo gratuito de qualidade, vamos usar a diversão a nosso favor.</p>
                        </div>
                        
                        <div classeName="col-lg-4 col-md-6 mb-5">
                            <div classeName="position-relative mb-4">
                                <img classeName="img-fluid rounded w-100" src={Premios} alt=""/>
                            </div>
                            <div classeName="d-flex mb-2">
                                <a classeName="text-secondary text-uppercase font-weight-medium" href="">Prêmios</a>
                                <span classeName="text-primary px-2">|</span>
                                <a classeName="text-secondary text-uppercase font-weight-medium" href="">Incentivos</a>
                            </div>
                            <h5 classeName="font-weight-medium mb-2">Evolua sua notas e ganhe pontos</h5>
                            <p classeName="mb-4">Aumente seu desempenho nas atividades e tenha acesso à bônus exclusivos.</p>
                        </div>
                    </div>
                </div>
                
            </div></>
    )
}