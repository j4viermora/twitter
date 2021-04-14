import Layout from "components/appLayout/Layout";

export default function Home(){
    return(
        <>
            <Layout>
                <header>
                    <h2>
                        Inicio
                    </h2>
                </header>
                <section>

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
                    display: flex;
                    border-bottom: 1px solid #ccc;
                    height: 49px;
                    position: fixed;
                    top: 0;
                    width: 100%;
                }

                nav{
                    bottom: 0;
                    border-top: 1px solid #ccc;
                    height: 49px;
                    position: fixed;
                    width: 100%;
                }

                section{
                    padding-top: 100px
                }

            `}</style>
        </>
    )
}