import Link from "next/link";
import React from "react";
import Slick from "react-slick";

const SlickPost = (props) => {
    const { posts } = props;
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="slick">
            { props.title ? (<h2 className="slick__title">{ props.title }</h2>) : false }
            <Slick { ...settings }>
                { posts.map( (post) => (
                    <div className="slick__wrap-post" key={ post.id }>
                        <article className="slick__post">
                            <figure className="slick__post-fig">
                                <img src={ post.thumb } alt={ post.title } />
                            </figure>
                            
                            <span className="slick__post-type">{ post.type }</span>
                            <h3 className="slick__post-title">{ post.title }</h3>

                            <Link href={ post.link } target="_blank" className="slick__read-more">leia mais</Link>
                        </article>
                    </div>
                ) ) }
            </Slick>
        </section>
    )
}

export default SlickPost