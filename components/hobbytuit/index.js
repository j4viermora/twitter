import { Avatar } from 'components/Avatar/Avatar'
import React from 'react'
import { color } from 'styles/theme'

export const HobbyTuit = ({ avatar, id, username, message  }) => {
   

    return (
        <>
        <article>
            <div>
                <Avatar src={ avatar } />
            </div>
            <section>
                <strong>{ username }</strong>
                <p>{ message }</p>
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
