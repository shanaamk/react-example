import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Container } from 'react-bootstrap';
import Counter from './Component/Counter';

function App() {
  return (
    <div className="App">
     <Container>
      <Counter/>
      
     </Container>
    </div>  

  );
}

export default App;
