import { Button, Alert, Breadcrumb } from 'react-bootstrap'
import './App.scss';


function App() {
  return (
    <div className="App">
      <Breadcrumb variant='rosewood'>
        <Breadcrumb.Item >Test</Breadcrumb.Item>
      </Breadcrumb>
        <Alert variant='rosewood'>This is a button</Alert>
        <Button variant='maple' className='m-2' id='btn-maple'>Button</Button>
        <Button variant='olive' className='m-2' id="btn-olive">Button</Button>
        <Button variant="rosewood" className='m-2' id='btn-rosewood'>Button</Button>
        <Button variant="cherry" className='m-2' id='btn-cherry'>Button</Button>
        <Button variant="sand" className='m-2' id='btn-sand'>Button</Button>
    </div>
  );
}

export default App;
