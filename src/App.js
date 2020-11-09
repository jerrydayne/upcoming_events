import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [eventz,setEventz] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{eventz.length} Upcoming Events</h3>
        <List eventz={eventz}/>
        <button onClick={() => setEventz([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
