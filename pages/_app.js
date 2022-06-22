import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { WalletProvider } from "@raidguild/quiver";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ColorModeFC } from "../contexts/ColorMode";

const SUPPORTED_NETWORKS = {
  "0x89": {
    chainId: "0x89",
    name: "Polygon",
    symbol: "MATIC",
    explorer: "https://polygonscan.com",
    rpc: "https://polygon-rpc.com/",
  },
  "0x13881": {
    chainId: "0x13881",
    name: "Mumbai Testnet",
    symbol: "MATIC",
    explorer: "https://mumbai.polygonscan.com",
    rpc: "https://matic-mumbai.chainstacklabs.com",
  },
};

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        137: SUPPORTED_NETWORKS["0x89"].rpc,
        80001: SUPPORTED_NETWORKS["0x13881"].rpc,
      },
    },
  },
};

const web3modalOptions = {
  cacheProvider: true,
  providerOptions,
  theme: "dark",
};

const DEFAULT_CHAIN_ID = "0x89";

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeFC>
      <ChakraProvider>
        <WalletProvider
          web3modalOptions={web3modalOptions}
          networks={SUPPORTED_NETWORKS}
          // Optional if you want to auto switch the network
          defaultChainId={DEFAULT_CHAIN_ID}
        >
          <Toaster />
          <Component {...pageProps} />
        </WalletProvider>
      </ChakraProvider>
    </ColorModeFC>
  );
}

export default MyApp;
