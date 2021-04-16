import { useEffect, useState } from "react";
import Layout from "components/appLayout/Layout";
import { HobbyTuit } from "components/hobbytuit";
import { color } from "styles/theme";
import { useUser } from "hooks/useUser";
import { fetchLastedDevid } from "firebase/client";

export default function Home(){
    
    const [ timeline, setTimeline ] = useState([]);
    const user = useUser()  

    console.log(timeline)

    useEffect( () => {

       user && fetchLastedDevid()
               .then( setTimeline )
                .catch( console.log )
    }, [ user ] )


    return(
        <>
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
                            />
                        ))
                    }
                </section>
                <nav>

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

                nav{
                    bottom: 0;
                    background: #fff;
                    border-top: 1px solid ${ color.light };
                    height: 49px;
                    position: sticky;
                    width: 100%;
                }

            `}</style>
        </>
    )
}