import ReactPlayer from "react-player";
import Card from "react-bootstrap";


const VideoContent = ({ urls }) => {
    return (
      <Card>
        <Card.Body>
        {urls.map((url, index) => (
          <div key={index} className="mb-3">
            <ReactPlayer url={url} controls />
          </div>
        ))}
        </Card.Body>
      </Card>
    );
  };
  
  export default VideoContent;