import ReactPlayer from "react-player";
import { Card } from "react-bootstrap";

const VideoContent = ({ urls }) => {
  return (
    <Card>
      <Card.Body>

        <ReactPlayer url={urls} controls />


      </Card.Body>
    </Card>
  );
};

export default VideoContent;