import Link from 'next/link';
import { useEffect, useState } from "react";
import Head from 'next/head';

import Layout from "components/appLayout/Layout";
import { HobbyTuit } from "components/hobbytuit";
import { useUser } from "hooks/useUser";
import { fetchLastedDevid } from "firebase/client";
import Create from "components/icons/CreatedPost";
import GoHome from 'components/icons/Home';

import { color } from "styles/theme";
import Search from 'components/icons/Search';


export default function Home(){
    
    const [ timeline, setTimeline ] = useState([]);
    const user = useUser()  

    console.log(timeline)

    useEffect( () => {

       user && fetchLastedDevid()
               .then( setTimeline )
                .catch( console.log )

        console.log( timeline )

    }, [ user ] )


    return(
        <>
            <Head>
                <title>Inicio / HobbyTweet</title>
            </Head>
            <Layout>
                <header>
                    <h2>
                        Inicio
                    </h2>
                </header>
                <section>
                    {
                        timeline?.map( tuit => (
                            <HobbyTuit
                                avatar={ tuit.avatar }
                                content={ tuit.content }
                                createdAt={ tuit.createdAt }
                                id={ tuit.id }
                                key={ tuit.id }
                                userId={ tuit.userId }
                                userName={ tuit.userName }
                                img={ tuit.img }  
                            />
                        ))
                    }
                </section>
                <nav>
                    <Link href="/home">
                        <a> 
                            <GoHome 
                            width={ 32 }
                            height={ 32 }
                            stroke="#09f"
                            />
                        </a>
                    </Link>
                    <Link href="/search">
                        <a> 
                            <Search 
                            width={ 32 }
                            height={ 32 }
                            stroke="#09f"
                            />
                        </a>
                    </Link>
                    <Link href="/compose/tweet">
                        <a> 
                            <Create 
                            width={ 32 }
                            height={ 32 }
                            stroke="#09f"
                            />
                        </a>
                    </Link>
                </nav>
            </Layout>

            <style jsx>{`

                h2{
                    font-size: 21px;
                    font-weight: 800;
                }

                header{
                    align-items: center;
                    background: #ffffffaa;
                    backdrop-filter: blur(5px);
                    display: flex;
                    border-bottom: 1px solid ${ color.light };
                    height: 49px;
                    position: sticky;
                    top: 0;
                    width: 100%;
                }

                section{
                    flex: 1;
                }

                nav{
                    bottom: 0;
                    background: #fff;
                    border-top: 1px solid ${ color.light };
                    display: flex;
                    height: 49px;
                    position: sticky;
                    width: 100%;
                }

                nav a {
                    align-items: center;
                    display: flex;
                    flex: 1 1 auto;
                    height: 100%;
                    justify-content: center;
                    }

                    nav a:hover {
                    background: radial-gradient(#0099ff22 15%, transparent 16%);
                    background-size: 180px 180px;
                    background-position: center;
                    }

                    nav a:hover > :global(svg) {
                    stroke: ${color.primary};
                    }

            `}</style>
        </>
    )
}