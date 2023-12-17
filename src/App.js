import ModalWnd from './components/Modal/ModalWnd';
import { useState } from 'react';

function App() {

  const [modalState, setModalState] = useState(false)

  return (
    <div className="App">
      <ModalWnd call={modalState} onDestroy={() => setModalState(false)}/>
      <button onClick={()=>setModalState(true)}>MW</button>
    </div>
  );
}

export default App;
