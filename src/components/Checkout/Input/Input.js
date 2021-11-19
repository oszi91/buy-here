import React from 'react';
import { useDispatch } from 'react-redux';

import { checkoutActions } from '../../../store/checkout/checkoutSlice';

const Input = ({
	dispatchFieldName,
	labelText,
	type,
	id,
	placeholder,
	error,
	state,
}) => {
	const dispatch = useDispatch();

	return (
		<div className="checkout__inputsContainer">
			<label className="checkout__inputsContainer__label" htmlFor={id}>
				{labelText}
			</label>
			<input
				value={state}
				onChange={e =>
					dispatch(
						checkoutActions.checkoutHandle({
							fieldName: dispatchFieldName,
							userData:
								type === 'tel'
									? parseFloat(e.currentTarget.value, 10) || ''
									: e.currentTarget.value,
						})
					)
				}
				className="checkout__inputsContainer__input"
				name={id}
				id={id}
				type={type}
				placeholder={placeholder}
			/>
			{error && <p className="checkout__inputsContainer__err">{error}</p>}
		</div>
	);
};

Input.defaultProps = { type: 'text' };

export default Input;
