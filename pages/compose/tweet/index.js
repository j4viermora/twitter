import Button from 'components/Button'
import Layout from 'components/appLayout/Layout'
import React, { useState } from 'react'
import { useUser } from 'hooks/useUser'

import { addPost } from 'firebase/client'
import { useRouter } from 'next/router';

const COMPOSE_STATES = {

    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,

};


export default function CreateTuit(){
    

    const router = useRouter()

    const user = useUser();
    const [ message, setMessage ] = useState('')
    const [ status, setStatus ] = useState( COMPOSE_STATES.USER_NOT_KNOW )

    const isMessageEmpty = !message.length || COMPOSE_STATES.LOADING === status;

    const handleChange = ( { target } ) => {
        setMessage( target.value )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus( COMPOSE_STATES.LOADING )
        console.log(message)
        addPost({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            userName: user.username,
        }).then( router.push('/home') ).catch( (err) => {
            console.log(err)
            setStatus( COMPOSE_STATES.ERROR )
        })
    }

    return (
        <>  
            <Layout>
                <form onSubmit={ handleSubmit }>
                    <textarea 
                    placeholder="¿Que esta pasando?" 
                    name="message"
                    value={ message }
                    onChange={ handleChange }>
                    </textarea>
                    <div>
                        <Button
                        type="submit"
                        disabled={ isMessageEmpty }
                        >
                            Publicar
                        </Button>
                    </div>
                </form>
            </Layout>
            <style jsx>{`

            div{
                padding: 15px;
            }

            textarea {
                border: 0;
                font-size: 21px;
                padding: 15px;
                outline: 0;
                min-height: 200px;
                resize: none;
                width: 100%;
                
            }
            `}</style>   
        </>
    )
}
