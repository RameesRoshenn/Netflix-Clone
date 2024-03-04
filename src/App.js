
import './App.css';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Row from './component/Row';
import requests from './requests';


function App() {
  return (
    <div>

      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      {/* <h1 style={{color:'red'}}>NETFLIX</h1> */}


     <Row isPresent={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>

     <Row  title="Trending" fetchUrl={requests.fetchTrending}/>

     <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>

     <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>

     <Row  title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>

     <Row  title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>

     <Row  title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>

     <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
