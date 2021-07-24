import React, {useState, useEffect} from 'react';
import './App.css'
import Lists from "./components/List/List";
import Details from "./components/Details/Details";
import Loader from "./components/Loader/Loader";

const baseURL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

function App() {
  const [lists, setLists] = useState([]);
  const [userID, setUserID] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    fetch(baseURL + 'users.json')
      .then(response => response.json())
      .then(data => setLists(prevState => [...prevState, ...data]))
      .catch(error => setError(error.message));
  }, []);

  useEffect(() => {
    if (!userID) {
      return;
    }
    setLoader(true);
    fetch(`${baseURL}${userID}.json`)
      .then(response => response.json())
      .then(data => {
        setUserInfo(prevState => ({...prevState, ...data}))
        setLoader(false);
      })
      .catch(error => setError(error.message));
  }, [userID]);

  const getIdHandler = (id) => {
    setUserID(id)
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-4">
          {error && <p>Что-то пошло не так, а вот почему: {error}</p>}
          {!error && <Lists lists={lists} getId={getIdHandler}/>}
        </div>
        <div className="col-8">
          {loader && <Loader/>}
          {userInfo && <Details userInfo={userInfo}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
