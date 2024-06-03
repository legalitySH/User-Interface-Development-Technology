import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./pages/header";
import Footer from "./pages/footer";
import Category from "./pages/Category"
import NotFound from "./pages/NotFound";
import movies from "./stuff/movies"
import series from "./stuff/series"
import episode from "./stuff/episode"
import {total} from "./stuff/total";
type content= {
    Title:string,
    Year:string,
    Type:string,
    Poster:string
}
const Rout = () => {
    const [location, handlerLocation] = useState('');
    const changePath=(str:string)=>{
        handlerLocation(str);
    }
  return (
      <BrowserRouter>
          <Header givePath={changePath}/>
        <Routes>
            <Route path="/movies"  element={<Category movies={movies} type="Movies"/>} />
          <Route path="/series" element={<Category movies={series} type="Series"/>} />
          <Route path="/cartoons" element={<Category movies={episode} type="Cartoons"/>} />
            <Route path="/all" element={<Category type={"All"} movies={total}/>} />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
          <Footer/>
     
      </BrowserRouter>
  );
};

export default Rout;
