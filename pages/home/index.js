import { useEffect, useState } from "react";
import Layout from "components/appLayout/Layout";
import { HobbyTuit } from "components/hobbytuit";
import { color } from "styles/theme";
import { useUser } from "hooks/useUser";

export default function Home(){
    
    const [ timeline, setTimeline ] = useState([]);
    const user = useUser()  
   
    useEffect( () => {

        user &&
        fetch("http://localhost:3000/api/statuses/home_timeline" )
        .then( resp => resp.json() )
        .then( resp => {
            setTimeline(resp)
            console.log(resp)
        } )

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
                                key={ tuit.id }
                                avatar={ tuit.avatar }
                                message={ tuit.message }
                                id={ tuit.id }
                                username={ tuit.username }                            
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