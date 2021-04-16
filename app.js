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

            const value = Math.round( elapsed / secondInUnit )
            return { 
                value,
                unit
                 }
        }
    }
}

 console.log( getDateDiff( 1000 )); 
