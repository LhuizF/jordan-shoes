import React from "react";
import Banner from "../../components/Banner";
import ShowContainer from "../../components/ShowContainer";
import './style.scss'

export default function Home(){
    return (
        <>
            <Banner />
            <section>
                <h2>Destaques</h2>
                <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
                <ShowContainer />
            </section>
            <footer>
                Todos os direitos reservados.
            </footer>
        </>
    )
}
