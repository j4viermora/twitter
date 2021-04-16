import { Avatar } from 'components/Avatar/Avatar'
import React from 'react'
import { color } from 'styles/theme'

export const HobbyTuit = ({ avatar, id, userName, content, createdAt  }) => {
   

    return (
        <>
        <article>
            <div>
                <Avatar src={ avatar } />
            </div>
            <section>
                <strong>{ userName }</strong>
                <data>{ createdAt }</data>
                <p>{ content }</p>
            </section>
        </article>

        <style jsx>{`

            article{
                border-bottom: 1px solid ${color.light} ;
                display: flex;
                padding: 10px 15px;
            }

            div{
                padding-rigth: 10px;

            }

            p{
                margin: 0
            }

        `}</style>   
        </>
    )
}
