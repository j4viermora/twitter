
export const Image = ( { src, alt, setImageURL } ) => {
    return (
        <>  
            <section>
                <button onClick={ ()=> setImageURL( null ) } >x</button>
                <img src={ src } alt={ alt } />
            </section>
            <style jsx>{`

                    section{
                        position: relative;
                    }

                    button{
                        postion: absolute;
                        rigth: 15px;
                        top: 15px;
                        background: rgba( 0, 0, 0, .3 );
                        border: 0;

                    }

                    img{
                        border-radius: 15px;
                        heigth: auto;
                        width: 100%;
                    }
                `}</style>
        </>
    )
}
