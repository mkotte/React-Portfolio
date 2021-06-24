import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

// Using semantic.ui for the cards!
function Cards( props ) {
    return (
        <Card fluid color='white'>
            <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
            <Card.Description>
                {props.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button href={`https://github.com/mkotte${props.repo}`} className="card-btn-link" target="_blank" >
                Github Repository
            </Button>
            {props.app !== "none" ? 
            <Button href={props.app} className="card-btn-link" target="_blank" >
                Deployed Application
            </Button> : 
            <> </>  
            }
            </Card.Content>
        </Card>
    )
};


export default Cards;