import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Layouts from '@/components/Layouts/Layouts'
import Hero from '@/components/Hero'
import SectionToDo from '@/components/SectionToDo'
import FormMsg from '@/components/FormMsg'
import SlickPost from '@/components/SlickPost'
import Preload from '@/components/Preload'


export default function Home() {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(!router.isReady) return;

        fetch('/api/posts')
            .then(r => r.json())
            .then(res => {
                setLoading(false)
                setPosts(res)
            })
            .catch(e =>{
                console.log('erro ao requisitar os posts: ', e);
                setLoading(false)
                setError(true)
            })

    }, [router.isReady])
    
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

                <SectionToDo />

                { loading ? ( <Preload /> ) : false }

                { posts.length > 0 ? (
                    <SlickPost title="good things" posts={ posts }></SlickPost>
                ) : false }

                <FormMsg />
            </Layouts>
        </>
    )
}