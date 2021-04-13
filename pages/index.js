import Head from 'next/head'
import Layout from '../components/appLayout/Layout'
import Button from '../components/Button'
import GitHub from '../components/icons'
import { color } from '../styles/theme'
// devit

export default function Home() {

  return (
    <>
      <Head>
        <title>Hobby tuit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section>
          <img src="/logo-15.svg" alt="logo" />
          <h1>
              HobbyTwit
          </h1>
          <h2>
              Talk about development <br/> with developers
          </h2>
          <Button>
            <GitHub width={24} height={ 24 } fill="#fff" />
            Login with Github
          </Button>
        </section>
      </Layout>

      <style jsx>{`
        h1 {
          color:${color.secondary};
          font-size: 48px;
          font-weight: 800;
        }  
        section{
          display: grid;
          height: 100%;
          place-content:center;
          place-items: center
        }
      `}</style>
    </>
  )
}
