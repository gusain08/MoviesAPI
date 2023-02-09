import React from 'react'
import Card from 'react-bootstrap/Card';
function Movie(props) {
    return (
        <>
            
                <div className='col-md-3 card-wrapper'>
                <Card>
                        <Card.Img variant="top" src={props.poster}/>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.year}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
        </>
    );
}

export default Movie;

