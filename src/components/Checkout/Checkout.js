import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollToTopS } from '../../helpers/ScrollToTop';

import { sumPrice } from '../../helpers/sumPrice';
import { cartActions } from '../../store/cart/cartSlice';
import { checkoutActions } from '../../store/checkout/checkoutSlice';
import Confirmation from './Confirmation/Confirmation';
import Input from './Input/Input';
import { Validation } from './Validation/Validation';

const Checkout = () => {
	const dispatch = useDispatch();
	const [sucessMessage, setSucessMessage] = useState(false);

	const userInfo = useSelector(state => state.checkout.userInfo);
	const errors = useSelector(state => state.checkout.errors);
	const cartData = useSelector(state => state.cart.cartData);
	const totalPrice = sumPrice(cartData).toFixed(2);

	const {
		email,
		name,
		surname,
		phoneNumber,
		street,
		streetNumber,
		postCode,
		city,
	} = userInfo;

	const onSubmit = e => {
		e.preventDefault();
		if (Object.keys(Validation(userInfo)).length === 0) {
			setSucessMessage(true);
			dispatch(cartActions.reset());
			dispatch(checkoutActions.reset());
		} else {
			ScrollToTopS()
			dispatch(checkoutActions.checkoutErrors(Validation(userInfo)));
		}
	};

	return (
		<div className="container">
			<div className="checkoutContainer">
				<form className="checkout" onSubmit={onSubmit}>
					<div className="checkout__section">
						{sucessMessage && <Confirmation />}
						<h1 className="checkout__section__header">Checkout</h1>
						<div className="checkout__container__2inputs">
							<Input
								dispatchFieldName="name"
								labelText="Name"
								id="name"
								state={name}
								error={errors.name}
							/>
							<Input
								dispatchFieldName="surname"
								labelText="Surname"
								id="surname"
								state={surname}
								error={errors.surname}
							/>
						</div>
						<div className="checkout__container__2inputs">
							<Input
								dispatchFieldName="street"
								labelText="Street"
								id="street"
								state={street}
								error={errors.street}
							/>
							<Input
								dispatchFieldName="streetNumber"
								labelText="Number"
								id="streetNumber"
								state={streetNumber}
								error={errors.streetNumber}
								type="tel"
							/>
						</div>
						<div className="checkout__container__2inputs">
							<Input
								dispatchFieldName="postCode"
								labelText="post Code"
								id="postCode"
								state={postCode}
								error={errors.postCode}
								type="tel"
							/>
							<Input
								dispatchFieldName="city"
								labelText="City"
								id="city"
								state={city}
								error={errors.city}
							/>
						</div>
						<div className="checkout__container__2inputs">
							<Input
								dispatchFieldName="phoneNumber"
								labelText="phone number"
								id="phoneNumber"
								state={phoneNumber}
								error={errors.phoneNumber}
								type="tel"
							/>
							<Input
								dispatchFieldName="email"
								labelText="email"
								id="email"
								state={email}
								error={errors.email}
							/>
						</div>
					</div>
					{!sucessMessage && (
						<button className="checkout__btn">
							Confirm & Pay
							<span className="checkout__btn__price">({totalPrice} EUR)</span>
						</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default Checkout;
