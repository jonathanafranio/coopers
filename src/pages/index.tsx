import Head from 'next/head'
import Layouts from '@/components/Layouts/Layouts'
import Hero from '@/components/Hero'
import imageBanner from "../assets/img/hero.jpg"
import SectionToDo from '@/components/SectionToDo'


export default function Home() {
    return(
        <>
            <Head>
                <title>Desafio Coopers</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layouts>
                <Hero 
                    title_strong="Organize" 
                    title_text="your daily jobs" 
                    text="The only way to get things done" 
                    link_url="#to-do"
                    link_text="Go to To-do list" />

                <SectionToDo></SectionToDo>
            </Layouts>
        </>
    )
}