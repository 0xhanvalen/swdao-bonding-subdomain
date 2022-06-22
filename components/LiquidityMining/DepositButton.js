import { useState, useEffect } from 'react';
import icon from './depositbutton-icon.png';
import disabledicon from './disabled-depositbutton-icon.png';
import styles from './DepositButton.module.scss';

export default function DepositButton(props) {
	const [buttonState, setButtonState] = useState('disabled');
	const contract = props?.contract;
	useEffect(() => {
		if (typeof contract !== 'undefined') {
			setButtonState('connected');
		}
	}, [contract]);

	return (
		<>
			{buttonState == 'disabled' && (
				<button className={styles.button} disabled>
					Deposit <img src={disabledicon} alt="" />
				</button>
			)}
			{buttonState == 'connected' && (
				<button className={styles.button} onClick={props?.onClick}>
					Deposit <img src={icon} alt="" />
				</button>
			)}
		</>
	);
}
