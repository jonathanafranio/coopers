// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

type Posts = 
    {
        id: number,
        title: string,
        type: string,
        thumb: string,
        link: string,

    }


export default async function posts(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts_promisse: [] = await fetch(`https://visie.com.br/wp-json/wp/v2/posts`)
        .then(r => r.json())
        .then(r => r)
        .catch(e => e);

    const posts:Posts[] = posts_promisse.map( p => {
        const title = p.title.rendered;
        const { id, type, link, thumb } = p;
        return { id, title, type, thumb, link }
    });

    res.status(200).json(posts);
};