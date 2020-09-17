import React from 'react';
import './StyledSocials.css';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';

const Socials = () => {
	return (
		<>
			<div className='rectangle'>
				<h1>Share</h1>
				<img src={facebookIcon} alt='FacebookIcon' className='facebookIcon'/>
				<img src={twitterIcon} alt='TwitterIcon' className='twitterIcon'/>
				<img src={pinterestIcon} alt='PinterestIcon' className='pinterestIcon'/>

				<div className='triangle'></div>
			</div>

			<div className='rectangle-mobile'>
				<h1>Share</h1>
				<img src={facebookIcon} alt='FacebookIcon' className='facebookIcon'/>
				<img src={twitterIcon} alt='TwitterIcon' className='twitterIcon'/>
				<img src={pinterestIcon} alt='PinterestIcon' className='pinterestIcon'/>
			</div>
		</>

	);
}

export default Socials;