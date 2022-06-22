import { ethers } from 'ethers';

const createContract = async (ABI, address, provider, signer) => {
	const read = new ethers.Contract(address, ABI, provider);
	const write = new ethers.Contract(address, ABI, signer);
	return { read, write };
};

export default createContract;
