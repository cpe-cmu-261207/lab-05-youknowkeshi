import React from 'react';
import { useState } from 'react'

import Header from './component/Header';
import Todo from './component/Todo';
import Footer from './component/Footer';

function App() {

return (
        <div>
              <Header firstname="Pongtante" lastname="Namsawat" student_id={630612106} ></Header>
          <Todo/>

          <Footer copyright = "Copyright © 2021 Minimal todo List by Pongtanate Namsawat"></Footer>
        </div> 
  );
}

export default App;
