import { useEffect, useState, useCallback } from 'react';
import Search from './Components/Search';
import Banner from './Components/Banner';
import bannerURL from './banner.webp';
import Jumbotron from './Components/Jumbotron';
import './App.css';
import ImagesContainer from './Components/ImagesContainer';

function App() {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [banner, setBanner] = useState(bannerURL);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(30);

  const handleChange = async (searchKey = "all") => {
    const SEARCH_KEY = searchKey.replaceAll(" ", "+");

    const API_KEY = '28232086-cbd94f2a1716769c13b33dc0a';
    const DATA_PER_PAGE = 200;
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${SEARCH_KEY}&image_type=photo&per_page=${DATA_PER_PAGE}`
    try {
      await fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          setImages(data.hits);
        })
    } catch (e) {
      console.log('error: ', e)
    }
  }

  // Debounce
  const debounce = (getData, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        getData.apply(context, args);
      }, delay)
    }
  }

  // Optimized Search
  const optimizedSearch = useCallback(debounce(handleChange, 500), [])

  // Fetch current category images
  const currentCategory = async (data) => {
    const lists = document.querySelectorAll('.category-list')
    lists.forEach((list) => {
      if (list.classList.contains('active')) {
        list.classList.remove('active');
      }
    })
    data.target.classList.add('active');
    setCategory(data.target.textContent.toLowerCase());
  }

  useEffect(() => {
    handleChange();
  }, [])

  useEffect(() => {
    if (category != "") {
      handleChange(category);
    }
  }, [category])


  return (
    <div className="App">
      <Banner
        bannerLink={banner}
        bannerText={"Image Search"}
        bannerSubText={"10,00,000+ images from pixabay api"}
      />

      <Search
        placeholder={"Search..."}
        data={optimizedSearch}
      />

      <Jumbotron
        currentCategory={currentCategory}
      />

      <ImagesContainer
        images={images}
      />
    </div>
  );
}

export default App;
