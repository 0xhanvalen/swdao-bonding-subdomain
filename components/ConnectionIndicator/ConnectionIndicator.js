import { useWallet } from '@raidguild/quiver';
import styles from './ConnectionIndicator.module.scss';

const ConnectionIndicator = () => {
	const { connectWallet, disconnect, isConnected, provider, chainId } = useWallet();
	return (
		<div
			className={styles.container}
			onClick={isConnected ? () => disconnect() : () => connectWallet()}
		>
			{!isConnected && (
				<>
					<div className={styles.emptyIndicator}></div>
					<p>Not Connected</p>
				</>
			)}
			{isConnected && (
				<>
					<div className={styles.connectedIndicator}></div>
					<p>Connected</p>
				</>
			)}
		</div>
	);
};

export default ConnectionIndicator;
