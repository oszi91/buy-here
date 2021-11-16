import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSingleProduct } from '../../../../store/data/dataActions';

import { API_TOTAL_NUMBER_OF_ITEMS } from '../../../../API/API';

const NextPrevProduct = ({ id }) => {
    const dispatch = useDispatch();

    const updateProducts = id => {
		dispatch(fetchSingleProduct(id));
	};

	const linkStatus = {
		next: id + 1,
		prev: id - 1,
	};

	const checkPrevLink = linkStatus.prev <= 0 ? null : linkStatus.prev;
	const checkNextLink =
		linkStatus.next > API_TOTAL_NUMBER_OF_ITEMS ? null : linkStatus.next;

	return (
		<>
			{checkNextLink && (
				<Link
					onClick={() => updateProducts(linkStatus.next)}
					className="navBtn navBtn__next"
					to={`/${linkStatus.next}`}
				>
					Next <i className="fas fa-arrow-circle-right"></i>
				</Link>
			)}
			{checkPrevLink && (
				<Link
					onClick={() => updateProducts(linkStatus.prev)}
					className="navBtn navBtn__prev"
					to={`/${linkStatus.prev}`}
				>
					<i className="fas fa-arrow-circle-left"></i> Prev
				</Link>
			)}
		</>
	);
};

export default NextPrevProduct;
