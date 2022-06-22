import { useState, useEffect } from 'react';
import icon from './claim-icon.png';
import disabledicon from './disabled-claim-icon.png';
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
					Claim <img src={disabledicon} alt="" />
				</button>
			)}
			{buttonState == 'connected' && (
				<button className={styles.button} onClick={props?.onClick}>
					Claim <img src={icon} alt="" />
				</button>
			)}
		</>
	);
}
