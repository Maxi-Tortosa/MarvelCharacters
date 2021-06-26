import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import styled from 'styled-components';

const Header = () => {
	return (
		<>
			<Container>
				<div className='div1'>
					<Link to='/favorites'>
						<MdFavorite className='icon' />
					</Link>
				</div>
				<Link to={''}>
					<img
						className='marvelLogo'
						src='../../../img/imgMarvel.png'
						alt='Marvel Logo'
					/>
				</Link>
				<div className='div2'>
					<p>MARVEL CHARACTERS LIST</p>
				</div>
			</Container>
		</>
	);
};

export default Header;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: black;
	align-items: center;
	width: 100%;

  .div1 {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;

    .icon {
      color: whitesmoke;
      height: 30px;
      width: 30px;
      display: flex;
      margin: 1rem 1rem 0 1rem;
    }
    }

	.marvelLogo {
		width: 13em;
		margin-top: 0px;
	}

  .div2{
    p{color: white;
      font-size:14pt;
      margin: 10px}}
	
	}
`;
