import './App.css';
import { Button, Alert, Breadcrumb } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
      </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
    </div>
  );
}

export default App;
