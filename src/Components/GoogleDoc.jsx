import GoogleDocsViewer from 'react-google-docs-viewer';
import Card from 'react-bootstrap';


const GoogleDoc = ({ fileUrl }) => {
  return (
    <Card>
      <Card.Body>
        <GoogleDocsViewer fileUrl={fileUrl} />
      </Card.Body>
    </Card>
  );
};

export default GoogleDocContentComponent;