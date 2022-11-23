import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Bg from './Bg';
import Cards from './Cards'
import Information from './comp/Information';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import About from './comp/About'
import TitlebarBelowMasonryImageList from './comp/Services'
import OurTeam from './comp/OurTeam'
import Blog from './comp/Blog'
import { FaBars } from 'react-icons/fa';

function App() {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setscreenWidth] = useState(window.innerWidth)
	const toggleNav = () => {setToggleMenu(!toggleMenu)
	}

	useEffect(() => {
	const changeWidth = () => {setscreenWidth(window.innerWidth);}

	window.addEventListener('resize', changeWidth)
	return () => {
		window.removeEventListener('resize', changeWidth)
	}
	}, [])

	return (
<div className="container">
	<div className='wrapper'>
	<button onClick={toggleNav} className='btn'><FaBars/></button>
		<Header/>
		<Router>
		
				<div className='nav_items'>
					<nav className="nav">
					{(toggleMenu || screenWidth > 600) && (
					<ul className="list">
					<li><NavLink onClick={toggleNav} exact to="/" className="items">Home</NavLink></li>
					<li><NavLink onClick={toggleNav} to="/comp/About" className="items">About</NavLink></li>
					<li><NavLink onClick={toggleNav} to="/comp/Services" className="items">Services</NavLink></li>
					<li><NavLink onClick={toggleNav} to="/Cards" className="items">Pricing</NavLink></li>
					<li><NavLink onClick={toggleNav} to="/comp/OurTeam" className="items">Our Team</NavLink></li>
					<li><NavLink onClick={toggleNav} to="/comp/Blog" className="items">Blog</NavLink></li>
				</ul>	
				)}
				</nav>		
				<div className="nav__right">
					<a href="https://goo.gl/maps/asYeFXoGAehskwfC9"><img width={(30,30)} src="/img/icons/map.png" alt='map'/></a>
					<a href="https://www.facebook.com/bellinibeautybars"><img width={(30,30)} src="/img/icons/facebook.png" alt='facebook'/></a>
					<a href="https://www.instagram.com/bellini_beauty_bar/"><img width={(30,30)} src="/img/icons/instagram.png" alt='istagram'/></a>
				</div>
			</div>
				
	<Routes>
        <Route path={"/Cards"} exact element={<Cards/>}/>
		<Route path={"/comp/About"} element={<About/>}/>
		<Route path={"/comp/Services"} element={<TitlebarBelowMasonryImageList/>}/>
		<Route path={"/comp/OurTeam"} element={<OurTeam/>}/>
		<Route path={"/comp/Blog"} element={<Blog/>}/>
      	</Routes>
      </Router>
	  </div>
		<Bg/>
	<div className='wrapper'>
		<div className='maping'>
		 <Information/>
		</div>
		</div>
</div>
	);
}

export default App;
