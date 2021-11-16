export const sumPrice = arr =>
	arr.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
