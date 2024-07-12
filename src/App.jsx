import { useState } from 'react';
import Form from './components/Form.jsx';
import './App.css';

function App() {
  const [hexColor, setHexColor] = useState('');

  return (
    <div id="wrapper" style={{ backgroundColor: hexColor }}>
      <Form setHexColor={setHexColor} />
    </div>
  );
}

export default App;