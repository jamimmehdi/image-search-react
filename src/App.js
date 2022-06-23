import { useEffect, useState } from 'react';
import Search from './Components/Search';
import './App.css';

function App() {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(50);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        await fetch()
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
      } catch (e) {
        console.log('error: ', e)
      }
    }
  }, [])

  return (
    <div className="App">
      <Search/>
    </div>
  );
}

export default App;
