import React from 'react';
import './App.css';
import Counter from './Projects/Counter/Counter';
import Todo from './Projects/Todo/Todo';
import Weather from './Projects/Weather/Weather';
import ContactForm from './Projects/ContactForm/ContactForm';
import Gituser from './Projects/GitUser/Gituser';

function App() {
  
  return (
    <div>
      {/* <Counter/>  */}
      {/* <Todo/>  */}
      {/* <Weather/>  */}
      {/* <ContactForm /> */}
      <Gituser />
    </div>
  );
}

export default App;
