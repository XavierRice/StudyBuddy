import ReactMarkdown from 'react-markdown';
import { Card }from 'react-bootstrap';



const MarkdownContent = ({ url }) => {
    return (
      <Card>
        <Card.Body>
          <ReactMarkdown>{url}</ReactMarkdown>
        </Card.Body>
      </Card>
    );
  };
  
  export default MarkdownContent;