import React from 'react';
import { useSelector } from 'react-redux';

const Messages = () => {
	const message = useSelector(state => state.message.message);

    const {status, title} = message;

    let classStatus;
    if(status === 'error'){
        classStatus = "messages__error"
    } else{
        classStatus = "messages__success"
    }

	return (
		<ul className={`messages ${classStatus}`}>
			<li className="messages__title">{title}</li>
		</ul>
	);
};

export default Messages;
