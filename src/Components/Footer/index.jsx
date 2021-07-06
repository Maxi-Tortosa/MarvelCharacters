import styled from 'styled-components';
import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti';

const Footer = () => {
	return (
		<>
			<Container>
				<div className='developerData'>
					<div className='data'>
						<p>maximilianotortosa@gmail.com</p>
						<p>Tel/Whatsapp: 3517637557</p>
					</div>
					<div className='socialMedia'>
						<a href='https://www.linkedin.com/in/maximilianotortosa/'>
							<TiSocialLinkedin className='linkedIn' />
						</a>
						<a href='https://github.com/Maxi-Tortosa/marvelCharactersLenio'>
							<TiSocialGithub className='gitHub' />
						</a>
					</div>
				</div>
				<p className='copy'> @Copyright Maximiliano Tortosa </p>
			</Container>
		</>
	);
};

export default Footer;

const Container = styled.div`
	background-color: black;
	display: flex;
	flex-direction: column;

	.copy {
    background-color:red;
		font-weight: 700;
		font-size: 14pt;
		text-align: center;
    padding: 16px 0px;
    margin:0;
	}

	.developerData {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

    .data {
      width:80%;

      p {
			font-size: 12pt;
      margin: 10px 20px;
      color:whitesmoke;
      
		  }
    }

  .socialMedia{
    width: 20%;
    display:flex; 
    justify-content:center;
    
    .linkedIn{width: 40px;
      height: 40px;
      color: whitesmoke;}
    .gitHub{width: 40px;
      height: 40px;
      color: whitesmoke;}
    }
   }
	}
`;
