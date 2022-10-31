import Card from 'react-bootstrap/Card';

function GitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='image.png' />
            <Card.Body>
                <Card.Title>Csalinas1009</Card.Title>
                <Card.Text>
                    SnapShot Test!
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GitHubCard;