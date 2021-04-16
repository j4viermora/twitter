import { Avatar } from 'components/Avatar/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'
import React from 'react'
import { color } from 'styles/theme'

export const HobbyTuit = ({ avatar, id, userName, content, createdAt  }) => {
    



    const timestamp = useTimeAgo( createdAt )

    return (
        <>
        <article>
            <div>
                <Avatar src={ avatar } />
            </div>
            <section>
                <strong>{ userName }</strong>
                <span> - </span>
                <data>{ timestamp }</data>
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
