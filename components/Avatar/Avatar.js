import React from 'react'

export const Avatar = ( { src, alt } ) => {
    return (
        <>

            <img src={ src } alt={ alt } title={ alt } />

            <style jsx>{`
                img{
                    border-radius: 999px;
                    height: 49px;
                    width: 49px;
                }
            `}</style>   
        </>
    )
}
