
import React from 'react';
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Header from './component/header';
import Home from './component/home';
import CardDetails from './component/cardDetails';
import Grid from '@mui/material/Grid';



function App() {
  return (
    <div >
      
      <Grid container direction={'column'} sx={{background: "linear-gradient(to right, #c9ffbf, #ffafbd)"}}>

        <Grid item> 
        <Header/>
        </Grid>
        <Grid  item container style={{ marginTop:"80px"}}>
          <Grid item xs={0.5}/>
          <Grid itme xs={11}>
          <Router>
              <Routes>
                <Route path="/" axact element={<Home />} />
                <Route path="pokemon/:id" element={<CardDetails />} />
              </Routes>
           </Router>
          </Grid>
          <Grid item xs={0.5}/>
        </Grid>
       </Grid>
       
        
    </div>
  );
    
}

export default App;
