import timeline from 'data/test';

export default ( req, res ) => {
    res.statusCode = 200;
    res.setHeader( "Content-Type", "application/json" );
    res.send(timeline)
}