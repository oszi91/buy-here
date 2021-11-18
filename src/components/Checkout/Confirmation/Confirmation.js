import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Confirmation = () => {
	const history = useHistory();
	const [seconds, setSeconds] = useState(5);

	useEffect(() => {
		let timer = null;
		if (seconds > 0) {
			timer = setTimeout(() => setSeconds(seconds - 1), 1000);
		} else {
			history.push('/');
		}
		return () => clearTimeout(timer);
	});

	return (
		<div className="confirmation">
			<h1 className="confirmation__header">Thank you for shopping!</h1>
			<h2 className="confirmation__redirect">
				You will be redirected to the home page in{' '}
				<span className="confirmation__redirect__sec">{seconds}</span> seconds.
			</h2>
		</div>
	);
};

export default Confirmation;
