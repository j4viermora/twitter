
export const Image = ( { src, alt, setImageURL } ) => {
    return (
        <>  
            <section>
                <button onClick={ () => setImageURL( null ) } >x</button>
                <img src={ src } alt={ alt } />
            </section>
            <style jsx>{`

                    section{
                        position: relative;
                    }

                    button{
                        background: rgba( 0, 0, 0, .3 );
                        border: 0;
                        border-radius: 999px;
                        cursor: pointer;
                        color: #fff;
                        font-size:24px;
                        width: 34px;
                        height: 34px;  
                        position: absolute;
                        right: 15px;
                        top: 15px;
                        z-index: 99;

                    }

                    img{
                        border-radius: 15px;
                        heigth: auto;
                        width: 100%;
                        position: relative;
                    }
                `}</style>
        </>
    )
}
