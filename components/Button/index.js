import { color } from "../../styles/theme";

export default function Button( { children, onClick, disabled } ){
    return (
        <>
            <button
            disabled={ disabled }
            onClick={ onClick }>
                { children }
            </button>
            <style jsx>
                {`

                button{
                    align-items: center;
                    border: 0;
                    background-color: ${color.secondary};
                    color: white;
                    cursor: pointer;
                    border-radius: 999px;
                    display: flex;
                    font-size: 16px;
                    font-weight: 800;
                    padding: 8px 24px;
                    transition: opacity .3s ease;
                    user-select: none;
                }

                button[disable] {
                    opacity: 0.1;
                    pointer-events: none;
                }

                button > :global(svg){
                    margin-right: 8px
                }


                button:hover{
                    opacity: .8;
                }
                
                `}
            </style>
        </>
    )
};