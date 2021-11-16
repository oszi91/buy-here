import React from 'react';

const LoadMoreBtn = ({ updateProducts, showBtn }) => {
	return (
		<>
			{showBtn && (
				<div className="loadMore">
					<button className="loadMore__btn" onClick={updateProducts}>
						Load more
					</button>
				</div>
			)}
		</>
	);
};

export default LoadMoreBtn;
