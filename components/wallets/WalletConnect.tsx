import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
  } from "@web3modal/ethereum";
  
  import { Web3Modal } from "@web3modal/react";
  
  import { configureChains, createClient, WagmiConfig } from "wagmi";
  
  import { arbitrum, mainnet, polygon } from "wagmi/chains";

  const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "9f606c7f046146b0dff0b70fbe3f9f64" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "Tilata", chains }),
  provider,
});


// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function WalletConnect() {

}

export {provider, wagmiClient, ethereumClient}