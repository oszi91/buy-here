import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addToCartWithMessage } from '../../../../store/cart/cartActions';
import { favoritesActions } from '../../../../store/favorites/favoritesSlice';
import { fetchSingleProduct } from '../../../../store/data/dataActions';

import AddToCartButton from '../../../Buttons/AddToCartButton/AddToCartButton';
import AddToFav from '../../../Buttons/AddtoFav/AddToFav';
import CheckAlsoProducts from '../CheckAlsoProducts/CheckAlsoProducts';
import Loading from '../../../Loading/Loading';
import NextPrevProduct from '../../../Buttons/NextPrevProduct/NextPrevProduct';
import OneProductView from '../OneProductView/OneProductView';

const OneProductBigView = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const data = useSelector(state => state.data.data);
	const productDetails = useSelector(state => state.data.currProduct);
	const loading = useSelector(state => state.data.loading);

	const { title, description, price, image, category } = productDetails;
	const idNum = Number(id);

	useEffect(() => {
		dispatch(fetchSingleProduct(idNum));
	}, [dispatch, idNum]);

	const productDataToCart = { id: idNum, image, title, price, quantity: 0 };
	const addToCartHandle = () => {
		dispatch(addToCartWithMessage(productDataToCart));
	};
	const addOrDeleteFavHandle = () => {
		dispatch(favoritesActions.addOrDelete(productDataToCart));
	};

	return (
		<>
			<div className="oneProductBigConatainer">
				<div className="oneProductBig">
					{!loading && (
						<>
							<OneProductView
								title={title}
								description={description}
								price={price}
								image={image}
							/>
							<AddToCartButton addToCartHandle={addToCartHandle} />
							<AddToFav addOrDelete={addOrDeleteFavHandle} id={idNum} />
							<NextPrevProduct id={idNum} />
						</>
					)}
					{loading && <Loading />}
				</div>
			</div>
			<CheckAlsoProducts category={category} data={data} />
		</>
	);
};

export default OneProductBigView;
