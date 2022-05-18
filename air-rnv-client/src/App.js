import { Button, Alert, Breadcrumb } from 'react-bootstrap'
import './App.scss';


function App() {
  return (
    <div className="App">
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
      </Breadcrumb>
        <Alert variant='rosewood'>This is a button</Alert>
        <Button>Test Button</Button>
    </div>
  );
}

export default App;
