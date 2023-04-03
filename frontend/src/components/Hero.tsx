//import Link from "next/link";
import Image from 'next/image';
import imageBanner from "../assets/img/hero.jpg"

const Hero = (props) => {
    const scrollIntoView = (e) => {
        e.preventDefault();
        document.querySelector('#to-do').scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    return(
        <article className="hero">
            <div className="hero__txt">
                <h1 className="hero__title">
                    <strong>{ props.title_strong }</strong><br />
                    { props.title_text }
                </h1>

                <p className="hero__p">{ props.text }</p>
                
                <a className="hero__link" href="#to-do" onClick={ e => scrollIntoView(e) }>{ props.link_text }</a>
            </div>
            
            <figure className="hero__fig">
                <Image src={ imageBanner } alt="" />
            </figure>


            <a href="#to-do" className="hero__arrow-down" onClick={ e => scrollIntoView(e) }>
                <svg width="25" height="42" viewBox="0 0 25 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 2.0885L14.5 0.0884957L10.5 0.0884955L10.5 2.0885L14.5 2.0885ZM12.5 41.9115L24.047 21.9115L0.952993 21.9115L12.5 41.9115ZM10.5 2.0885L10.5 23.9115L14.5 23.9115L14.5 2.0885L10.5 2.0885Z" fill="currentColor"/>
                </svg>            
            </a>


        </article>
    )    
}
export default Hero