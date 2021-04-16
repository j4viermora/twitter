import { useEffect } from 'react';
import Head from 'next/head'
import Layout from 'components/appLayout/Layout'

import Button from 'components/Button'
import GitHub from 'components/icons/GitHub'
import {
  loginWithGitHub,
} from 'firebase/client'

import { color } from 'styles/theme';
import { useRouter } from 'next/router';
import { USER_STATE ,useUser } from 'hooks/useUser';


export default function Index() {

   const router = useRouter();
    
    const user = useUser();

    useEffect( ()=> {
      user && router.replace( '/home');
    }, [ user ]);
  
    const handleClick = () => {
      loginWithGitHub()
      .catch(err => {
        console.log(err)
      })
    }
  
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
           <div>
          {
              user === USER_STATE.NOT_LOGGED &&
                <Button onClick={handleClick}>
                  <GitHub fill='#fff' width={24} height={24} />
                  Login with GitHub
                </Button>
            }
            {
              user === USER_STATE.NOT_KNOW && (
               <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
            )}
          </div>
        </section>
      </Layout>

      <style jsx>{`
        h1 {
          color:${color.secondary};
          font-size: 48px;
          font-weight: 800;
          margin: 0
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
