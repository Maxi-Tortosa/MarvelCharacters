import React from 'react';
import styled from 'styled-components';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Pagination = ({
	charactersPerPage,
	totalCharacters,
	paginate,
	changePage,
	currentPage,
}) => {
	const pageNumbers = [];
	let paginationNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
		pageNumbers.push(i);
	}

	if (currentPage === pageNumbers.length - 2) {
		paginationNumbers = pageNumbers.slice(currentPage - 2, currentPage + 2);
	} else if (currentPage === pageNumbers.length - 1) {
		paginationNumbers = pageNumbers.slice(currentPage - 3, currentPage + 1);
	} else if (currentPage === pageNumbers.length) {
		paginationNumbers = pageNumbers.slice(currentPage - 4, currentPage);
	} else {
		paginationNumbers = pageNumbers.slice(currentPage - 1, currentPage + 3);
	}

	return (
		<Container>
			{totalCharacters ? (
				<ul>
					{currentPage > 1 ? (
						<li>
							<a className='1' onClick={changePage} href='!#'>
								<GrFormPrevious />
								PREV
							</a>
						</li>
					) : null}
					{currentPage === 2 ? (
						<li>
							<a onClick={() => paginate(1)} href='!#'>
								1
							</a>
						</li>
					) : currentPage >= 3 ? (
						<>
							<li>
								<a onClick={() => paginate(1)} href='!#'>
									1
								</a>
							</li>
							<li>
								<p>...</p>
							</li>
						</>
					) : null}
					{paginationNumbers.map((number) => (
						<li key={number}>
							<a
								className={currentPage === number ? 'active' : null}
								onClick={() => {
									paginate(number);
								}}
								href='!#'>
								{number}
							</a>
						</li>
					))}

					{currentPage < pageNumbers.length - 4 ? (
						<>
							<li>
								<p>...</p>
							</li>{' '}
							<li>
								<a onClick={() => paginate(pageNumbers.length)} href='!#'>
									{pageNumbers.length}
								</a>
							</li>{' '}
						</>
					) : currentPage === pageNumbers.length - 4 ? (
						<li>
							<a onClick={() => paginate(pageNumbers.length)} href='!#'>
								{pageNumbers.length}
							</a>
						</li>
					) : null}
					{currentPage < pageNumbers.length ? (
						<li>
							<a onClick={changePage} href='!#'>
								NEXT <GrFormNext />
							</a>
						</li>
					) : null}
				</ul>
			) : null}
		</Container>
	);
};
export default Pagination;

const Container = styled.div`
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		list-style-type: none;
		align-content: center;
		justify-content: center;
		
		li {
			display: flex;
			align-items: center;
			font-size: 15pt;
			margin: 0 1.9%;		
			}
			a {
				text-decoration: none;
				display: flex;
				align-items: center;
				color: rgba(32, 32, 32, 1);
				font-weight: 300 ;
				

			}
			a:active {color:red;}
			.active{font-weight:500;}
		}
	}
`;
