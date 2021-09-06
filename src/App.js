import React from 'react';
import Average02 from './component/08/Average02';

function App() {
  const [visible, setVisble] = React.useState(false);
  return (    
    <div >
      <button onClick={() => {
        setVisble(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
        </button>
        <br />
      {visible &&<Average02 />}
    </div>
  );
}

export default App;
