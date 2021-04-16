import Button from 'components/Button'
import Layout from 'components/appLayout/Layout'
import React, { useState } from 'react'

export default function CreateTuit(){
    
    const [ user, setUser ] = useState();
    
    
    
    return (
        <>  
            <Layout>
                <form>
                    <textarea placeholder="¿Que esta pasando?">
                    </textarea>
                    <div>
                        <Button>
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
