import { useState, useEffect } from 'react';
import Head from 'next/head'
import Layout from 'components/appLayout/Layout'

import Button from 'components/Button'
import GitHub from 'components/icons'
import {
  loginWithGitHub,
  onAuthStateChanged
} from '../firebase/client'

import { color } from 'styles/theme'
import { Avatar } from 'components/Avatar/Avatar';
 
export default function Index() {


    const [user, setUser] = useState(undefined)
    
    useEffect(() => {
      onAuthStateChanged(setUser)
    }, [])
  
    const handleClick = () => {
      loginWithGitHub().then(setUser).catch(err => {
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
              user === null &&
                <Button onClick={handleClick}>
                  <GitHub fill='#fff' width={24} height={24} />
                  Login with GitHub
                </Button>
            }
            {
              user && user.avatar && (
              <div>
                <Avatar 
                src={ user.avatar } 
                alt={user.username}
                text={ user.username }
                withText
                />
              </div>
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
