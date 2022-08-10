
import React from 'react';
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Home from './component/home';
import Pokemon from './component/pokemon';
import Grid from '@mui/material/Grid';
import  './App.css'
import Layout from './component/layout';

const App= React.memo(() =>{
  return (  
 <Grid container direction={'column'} >
  <Router>
   <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Layout>
   </Router>
</Grid>    
  );
})

export default App ;
