import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';

const Header = () => {
	return (
		<>
			<div className='header'>
				<div className='header__div1'>
					<Link to='/favorites'>
						<MdFavorite />
					</Link>
				</div>
				<Link to={''}>
					<img src='../../../img/imgMarvel.png' alt='Marvel Logo' />
				</Link>
				<div>
					<p>MARVEL CHARACTERS LIST</p>
				</div>
			</div>
		</>
	);
};

export default Header;

// .header {
// 	display: flex;
// 	flex-direction: column;
// 	background-color: black;
// 	align-items: center;
// }

// .header__div1 {
// 	width: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-end;
// }

// .header svg {
// 	color: whitesmoke;
// 	height: 30px;
// 	width: 30px;
// 	display: flex;
// 	margin: 0 10px;
// }
// .header img {
// 	height: 60px;
// 	width: 149px;
// 	margin-top: 0px;
// }
