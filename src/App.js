
import React from 'react';
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Home from './component/home';
import Pokemon from './component/pokemon';
import Layout from './component/layout';

const App= () =>{
  return (  
    <Router>

    <Layout>
      <Routes>
       <Route exact path="/" element={<Home />} />
         {/* <Route path="pokemon/:name" element={<Pokemon />} /> */}
      </Routes>
    </Layout>
    </Router>    
  );
}

export default App ;
