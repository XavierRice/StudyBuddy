import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap';



const MarkdownContent = ({ content }) => {
    return (
      <Card>
        <Card.Body>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Card.Body>
      </Card>
    );
  };
  
  export default MarkdownContent;