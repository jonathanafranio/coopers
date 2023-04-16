import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
//import { storeWrapper } from '@/store';
import { useRouter } from "next/router";
import Layouts from '@/components/Layouts/Layouts'
import Hero from '@/components/Hero'
import SectionToDo from '@/components/SectionToDo'
import FormMsg from '@/components/FormMsg'
import SlickPost from '@/components/SlickPost'
import Preload from '@/components/Preload'

import { loginUser } from '../store/actions/user'
import { editList1, editList2 } from '@/store/actions/lists'


export default function Home() {
    const dispatch = useDispatch();

    const setLogin = (user: object) => {
        dispatch(loginUser(user))
    }

    const login = useSelector((state: any) => state.user);
    

    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const todoLogout = {
        first: [],
        secound: []
        /*first: [
            {
                checked: true,
                id: 1,
                description: 'this is a new task'
            },
            {
                checked: false,
                id: 2,
                description: 'Develop the To-do list page'
            },
            {
                checked: false,
                id: 3,
                description: 'Create the drag-and-drop function'
            },
            {
                checked: false,
                id: 4,
                description: 'Add new tasks'
            },
            {
                checked: false,
                id: 5,
                description: 'Delete itens'
            },
            {
                checked: false,
                id: 6,
                description: 'Erase all'
            },
            {
                checked: false,
                id: 7,
                description: 'Checked item goes to Done list'
            },
            {
                checked: false,
                id: 8,
                description: 'This item label may be edited'
            }
        ],
        secound: [
            {
                checked: true,
                id: 11,
                description: 'Get FTP credentials'
            },
            {
                checked: true,
                id: 12,
                description: 'Home Page Design'
            },
            {
                checked: true,
                id: 13,
                description: 'E-mail John about the deadline'
            },
            {
                checked: true,
                id: 14,
                description: 'Create a Google Drive folder'
            },
            {
                checked: true,
                id: 15,
                description: 'Send a gift to the client'
            }
        ]*/
    }
    const [firstToDo, setFirstToDo] = useState(todoLogout.first);
    const [lastTodo, setLastTodo] = useState(todoLogout.secound);
    //const firstToDo = useSelector((state: any) => state.list_1);
    //const lastTodo = useSelector((state: any) => state.list_2);

    const toDo_txt = {
        title: 'To-do List',
        description: 'Drag and drop to set your main priorities, check when done and create what´s new.'
    };

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

        const credentialsLogin = localStorage.getItem('user-login');
        if(credentialsLogin) {
            const list_1 = localStorage.getItem('list_1');
            const list_2 = localStorage.getItem('list_2');
            setLogin( JSON.parse(credentialsLogin) );

            dispatch(editList1(JSON.parse(list_1)));
            dispatch(editList2(JSON.parse(list_2)));
            
            //setFirstToDo( JSON.parse(list_1) );
            //setLastTodo( JSON.parse(list_2) );
        }

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

                <SectionToDo 
                    title={ toDo_txt.title } 
                    description={ toDo_txt.description } 
                    login={ login } />

                { loading ? ( <Preload /> ) : false }

                { posts.length > 0 ? (
                    <SlickPost title="good things" posts={ posts }></SlickPost>
                ) : false }

                <FormMsg />
            </Layouts>
        </>
    )
}