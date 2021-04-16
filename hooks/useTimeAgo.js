import { useEffect, useState } from 'react';

const DATE_UNITS = [
    [ 'day', 86400],
    ['hour', 3600],
    [ 'minute', 60 ],
    [ 'second', 1 ]
]

const getDateDiff = timestamp =>{
    const now = Date.now()

    const elapsed = ( timestamp - now ) / 1000;

    for( const [ unit, secondInUnit ] of DATE_UNITS ){

        if ( Math.abs( elapsed ) > secondInUnit || unit === 'second'){

            const value = Math.floor( elapsed / secondInUnit )
            return { 
                value,
                unit
                 }
        }
    }
}


export default function useTimeAgo( timestamp ){

    // const { value, unit } = getDateDiff( timestamp );
  
    const [ timeAgo, setTimeAgo ] = useState( () => {      
        getDateDiff(timestamp)
    } );


    const rft = new Intl.RelativeTimeFormat( "es", {
        style: "short"
    });

    useEffect( () => {

      const interval = setInterval( () => { 

        const newTimeAgo = getDateDiff( timestamp )
        setTimeAgo( newTimeAgo )

        }, 5000 )

        return () => clearInterval( interval );

    }, [ timestamp ] )

    if( !timeAgo ) return
    const { value, unit } = timeAgo;

    return rft.format( value, unit )
  
}