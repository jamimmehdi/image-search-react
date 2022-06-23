import { useEffect, useState } from 'react';
import Search from './Components/Search';
import './App.css';
import bannerURL from './banner.webp'
import Banner from './Components/Banner';

function App() {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState(bannerURL)
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
      <Banner bannerLink={banner} bannerText={"Image Search"} bannerSubText={"10,00,000+ images from pixabay api"}/>
      <Search />
    </div>
  );
}

export default App;
