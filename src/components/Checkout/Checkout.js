import React from 'react';
import { useSelector } from 'react-redux';
import { sumPrice } from '../../helpers/sumPrice';
import Input from './Input/Input';

const Checkout = () => {
	const checkoutData = useSelector(state => state.checkout);
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
	} = checkoutData;

	console.log(checkoutData);

	return (
		<div className="container">
			<div className="checkoutContainer">
				<form className="checkout" onSubmit={() => {}}>
					{/* {error && <h1>{error}</h1>} */}
					<div className="checkout__section">
						<h1 className="checkout__section__header">Checkout</h1>
						<div className="checkout__container__2inputs">
							<Input
								dispatchFieldName="name"
								labelText="Name"
								id="name"
								state={name}
							/>
							<Input
								dispatchFieldName="surname"
								labelText="Surname"
								id="surname"
								state={surname}
							/>
						</div>
						<div className="checkout__container__2inputs">
							<Input
								dispatchFieldName="street"
								labelText="Street"
								id="street"
								state={street}
							/>
							<Input
								dispatchFieldName="streetNumber"
								labelText="Number"
								id="streetNumber"
								state={streetNumber}
								type="tel"
							/>
						</div>
						<div className="checkout__container__2inputs">
							<Input
								dispatchFieldName="postCode"
								labelText="post Code"
								id="postCode"
								state={postCode}
							/>
							<Input
								dispatchFieldName="city"
								labelText="City"
								id="city"
								state={city}
							/>
						</div>
						<div className="checkout__container__2inputs">
							<Input
								dispatchFieldName="phoneNumber"
								labelText="phone number"
								id="phoneNumber"
								state={phoneNumber}
								type="tel"
							/>
							<Input
								dispatchFieldName="email"
								labelText="email"
								id="email"
								state={email}
							/>
						</div>
					</div>
					<button className="checkout__btn">
						Confirm & Pay
						<span className="checkout__btn__price">({totalPrice} EUR)</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Checkout;
