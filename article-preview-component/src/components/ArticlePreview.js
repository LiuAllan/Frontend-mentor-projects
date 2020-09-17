import React, { useState } from 'react';
import './StyledArticlePreview.css';
import articleImage from '../images/drawers.jpg';
import profileImage from '../images/avatar-michelle.jpg';
import shareIcon from '../images/icon-share.svg';

import Socials from './Socials';

const Article = () => {

	const [toggleSocial, setToggleSocial] = useState(false);

	const handleClick = () => {
		setToggleSocial(!toggleSocial);
	}

	return (
		<div className="article-preview-container">
			<img src={articleImage} alt='DrawerImage' className='articleImage'/>
			<div className='card'>
				<h1>
					Shift the overall look and feel by adding these wonderful 
					touches to furniture in your home
				</h1>

				<p>
					Ever been in a room and felt like something was missing? Perhaps 
					it felt slightly bare and uninviting. I’ve got some simple tips 
					to help you make any room feel complete.
				</p>

				
				<div className='user-share'>
					

					<div className='user'>
						<img src={profileImage} alt='michelle' className='profileImage'/>
						<div className='user-bundle'>
							<span className='user-name'>Michelle Appleton</span>
							<span className='user-date'>28 Jun 2020</span>
						</div>
					</div>

					<div className='share-button' onClick={handleClick}>
						<img src={shareIcon} alt='' />
					</div>
				</div>
			</div>
			{ toggleSocial ? <Socials /> : null }
		</div>
	);
}

export default Article;