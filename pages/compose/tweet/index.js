import Button from 'components/Button'
import Layout from 'components/appLayout/Layout'
import React, { useState, useEffect } from 'react'
import { useUser } from 'hooks/useUser'

import { addPost, uploadImage } from 'firebase/client'
import { useRouter } from 'next/router';

import { color } from 'styles/theme';

const COMPOSE_STATES = {

    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,

};

const DRAG_IMAGE_STATE = {

    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOUDING: 2,
    COMPLETE: 3,

}

import Head from 'next/head'
import { Image } from 'components/image'
import { Avatar } from 'components/Avatar/Avatar'


export default function CreateTuit(){
    

    const router = useRouter();
    
    const [ drag, setDrag ] = useState( DRAG_IMAGE_STATE.NONE );
    const [ task, setTask ] = useState( null );
    const [ imageURL, setImageURL ] = useState( null );


    const user = useUser();

    console.log(user.avatar)

    const [ message, setMessage ] = useState('')
    const [ status, setStatus ] = useState( COMPOSE_STATES.USER_NOT_KNOW )

    useEffect(() => {

        let onProgress = () => {}
        let onError = () => {}
        let onComplete = () => {
            console.log('complete')
            task.snapshot.ref.getDownloadURL().then( setImageURL )
        }

        if( task ){
            task.on('state_changed',
            onProgress,
            onError, 
            onComplete,

            )
        }

        console.log(  )

    }, [ task ])

    const inputFile = React.useRef();
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
            img: imageURL,

        }).then( router.push('/home') ).catch( (err) => {
            console.log(err)
            setStatus( COMPOSE_STATES.ERROR )
        })
    }

    const handleDragEnter =( e ) => {
        setDrag( DRAG_IMAGE_STATE.DRAG_OVER ) 
    }
    const handleDragLeave =( e ) => {     
        setDrag( DRAG_IMAGE_STATE.NONE ) 
    }
    const handleDrop =( e ) => {
        e.preventDefault()
        setDrag( DRAG_IMAGE_STATE.NONE ) 

        const file = e.dataTransfer.files[0];
        console.log(e.dataTransfer.files[0])

        const task = uploadImage( file ) 

        setTask( task )
    }

    const handleFielChange = (e) => {

        console.log( e )
        setDrag( DRAG_IMAGE_STATE.NONE ) 

        const file = e.target.files[0];
        console.log(e.target.files[0])

        const task = uploadImage( file ) 

        setTask( task )

    }

    const handleClickFile = ( e ) => {    
        e.preventDefault()
        console.log( inputFile.current.click() )
    }



    return (
        <>  
            <Head>
                <title>Crear Tweet</title>
            </Head>
            <Layout>
                <section>
                <Avatar src={ user.avatar } alt={ user.username } />
                <form onSubmit={ handleSubmit }>
                    <textarea 
                    name="message"
                    onChange={ handleChange }
                    onDragEnter={ handleDragEnter }
                    onDragLeave={ handleDragLeave }
                    onDrop={ handleDrop }
                    placeholder="¿Que esta pasando?" 
                    value={ message }
                    >
                    </textarea>
                    { imageURL && <Image src={ imageURL } alt={ imageURL } setImageURL={ setImageURL } /> }
                    <div>
                        <Button
                        type="submit"
                        disabled={ isMessageEmpty }
                        >
                            Publicar
                        </Button>
                        <input 
                        style={ { display: "none" } }
                        type="file"
                        ref={ inputFile }
                        onChange={ handleFielChange }
                        />
                        <button
                         onClick={ handleClickFile } >
                        Subir Archivo
                        </button>
                    </div>
                </form>
                </section>      
            </Layout>
            <style jsx>{`

            section{
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
            }

            button{
                border: 0;
                border-radius: 49px;
                backgroud: ${ color.primary };
                padding: 10px 12px;
                cursor: pointer;
            }

            div{
                padding: 15px;
                display: flex;
                justify-content: space-beetwen;
                align-items: center;
            }

            form{
                padding: 10px;
            }

            textarea {
                border:${drag === DRAG_IMAGE_STATE.DRAG_OVER
                            ? "3px dashed #09f"
                            : "3px solid transparent"};
                border-radius: 10px;
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
