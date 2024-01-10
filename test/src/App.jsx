//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importar js de bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
//import Actividad1 from './components/actividad1';
import ChuckNorrisJoke from './components/actividad9';
import { useState, useEffect , useRef} from 'react';
//importar lazy
//import { lazy, Suspense } from 'react';






function App() {

  const [jokes, setJokes] = useState([]);
  const refEffect = useRef(false);
  const getJokes = async () => {
    setJokes(
      <div className="spinner-border text-primary d-block" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ); 
    let url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setJokes(<ChuckNorrisJoke value={data.value} />);
    })
    .catch(e => console.log(e));
  }
  useEffect(() => {
    if (!refEffect.current) {
      getJokes();
    }
    
    return () => {
      refEffect.current = true;
    }

  }
  , []);
  
 

  return (
    <>
      <div className="container">
        <div className="row m-4 d-flex justify-content-center align-items-center text-center">
          <div className="col-12">
            <h1>Chistes de Chuck Norris</h1>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24a5439f-42c4-4cc0-ac08-6b064dd4eac5/diqxlb-a7c04866-2048-438c-b8cd-d63b39f3f108.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0YTU0MzlmLTQyYzQtNGNjMC1hYzA4LTZiMDY0ZGQ0ZWFjNVwvZGlxeGxiLWE3YzA0ODY2LTIwNDgtNDM4Yy1iOGNkLWQ2M2IzOWYzZjEwOC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.M9oTeJL9BoGdBxYyO_DyDEycjdr9m_AgmKwtP_KLYfc" alt="Chuck Norris" className="img-fluid w-25" />
          </div>
        </div>

        <div className="row m-4 d-flex justify-content-center align-items-center text-center">
          <div className="col-6 d-flex justify-content-center align-items-center text-center">
            {jokes}
          </div>
          <div className="col-12">
            <button className="btn btn-primary m-3 text-center" onClick={() => getJokes()}>Otro chiste</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
