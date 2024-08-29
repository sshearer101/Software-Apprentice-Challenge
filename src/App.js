import './App.css';
import { useState, useEffect } from 'react';
import AddComponent from './components/AddComponent';


function App() {

  const [adData, setAddData] = useState([])



  useEffect(() => {
    const fetchAd = async () => {
      const response = await fetch('http://localhost:3000/fakeDataSet');
      const data = await response.json();
      // console.log(data);
      setAddData(data);
    };
    fetchAd();
  }, []);






  return (
    <div>
      {Object.keys(adData).length > 0 ? (
        <div>
          <AddComponent adData={adData} ></AddComponent>
        </div>
      ) : (
        <div>
          No Data to Display
        </div>
      )
      }
    </div>
  );
}

export default App;
