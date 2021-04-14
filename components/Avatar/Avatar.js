import React from 'react'

export const Avatar = ( { src, alt, text, withText } ) => {
    return (
        <>
            <div>
                <img 
                src={ src } 
                alt={ alt } 
                title={ alt }
                
                />
                  <strong>{ withText && text || alt }</strong>
            </div>

            <style jsx>{`
                img{
                    border-radius: 999px;
                    height: 49px;
                    width: 49px;
                }
                img + strong {
                    margin-left: 8px;
                }
                div{
                    align-items: center;
                    display: flex;
                }
            `}</style>   
        </>
    )
}
