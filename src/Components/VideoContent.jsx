import ReactPlayer from "react-player";
import { Carousel, Card } from "react-bootstrap";

const VideoContent = ({ urls }) => {
    return (
      <Card>
        <Card.Body>
            <Carousel>
                {urls.map((url, i) => (
                    <Carousel.Item key={i}>
                        <ReactPlayer url={url} controls />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Card.Body>
      </Card>
    );
  };
  
  export default VideoContent;