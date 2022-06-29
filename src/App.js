import './App.css';
import Search from './Components/Search';
import Banner from './Components/Banner';
import bannerURL from './banner.webp';
import Jumbotron from './Components/Jumbotron';
import ImagesContainer from './Components/ImagesContainer';
import { useEffect, useState, useCallback } from 'react';

function App() {
	const [images, setImages] = useState([]);
	const [banner] = useState(bannerURL);
	const [loading, setLoading] = useState(false);
	const [category, setCategory] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [imagesPerPage] = useState(30);
	const [imagesInCurrentPage, setImagesInCurrentPage] = useState([]);

	const handleChange = async (searchKey = "all") => {
		setLoading(true);
		const DATA_PER_PAGE = 200;
		const SEARCH_KEY = searchKey.replaceAll(" ", "+");
		const API_KEY = '28232086-cbd94f2a1716769c13b33dc0a';
		const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${SEARCH_KEY}&image_type=photo&per_page=${DATA_PER_PAGE}`
		try {
			await fetch(API_URL)
				.then(response => response.json())
				.then(data => {
					setImages(data.hits);
					setCurrentPage(1);
					setImagesInCurrentPage([]);
				})
		} catch (e) {
			console.log('error: ', e);
		}
		setLoading(false);
	}

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

	const addImagesInCurrentPage = () => {
		const perPageData = [];
		for (let i = imagesInCurrentPage.length + 1; i < imagesInCurrentPage.length + imagesPerPage; i++) {
			if (!imagesInCurrentPage.includes(images[i])) {
				perPageData.push(images[i]);
			}
		}
		setImagesInCurrentPage([...imagesInCurrentPage, ...perPageData]);
	}

	const optimizedSearch = useCallback(debounce(handleChange, 500), [])

	const currentCategory = (data) => {
		const lists = document.querySelectorAll('.category-list');
		lists.forEach((list) => {
			if (list.classList.contains('active')) {
				list.classList.remove('active');
			}
		})
		data.target.classList.add('active');
		setCategory(data.target.textContent.toLowerCase());
	}

	window.addEventListener('scroll', () => {
		if (currentPage < 6) {
			if (window.innerHeight + document.documentElement.scrollTop >= Math.floor(document.documentElement.offsetHeight / 4) * 3) {
				setCurrentPage(currentPage + 1);
			}
		}
	})

	useEffect(() => {
		handleChange();
		console.log("here")
	}, [])

	useEffect(() => {
		if (category != "") {
			handleChange(category);
			addImagesInCurrentPage();
			setCurrentPage(1);
			setImagesInCurrentPage([]);
		}
	}, [category]);

	useEffect(() => {
		if (images.length != 0 && !loading) {
			addImagesInCurrentPage();
		}
	}, [loading, currentPage])


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
			<div className='fixed'>
				<Jumbotron
					currentCategory={currentCategory}
				/>
			</div>
			<ImagesContainer
				images={imagesInCurrentPage}
			/>
		</div>
	);
}

export default App;
