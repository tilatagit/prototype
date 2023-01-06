import '../styles/globals.css'
import '../styles/sidebar.css'
import '../styles/header.css'
import '../styles/dashboard/dashboard-info.css'
import '../styles/dashboard/list-header.css'
import '../styles/dashboard/souls-list.css'
import '../styles/list-footer.css'
import "../styles/souls/souls-header.css"
import "../styles/souls/souls-souls-list.css"
import "../styles/modules/modules.css"
import "../styles/jurisdictions/jurisdictions.css"
import "../styles/profile/profile.css"
import "../styles/modal.css"
import type { AppProps } from 'next/app'
import { useState } from 'react'
import AppContext from '../components/AppContexst'
import {provider, wagmiClient, ethereumClient} from '../components/wallets/WalletConnect'
import { Web3Modal } from '@web3modal/react'


export default function App({ Component, pageProps }: AppProps) {
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState([]);

  return (
    <AppContext.Provider value={{provider, setProvider, account, setAccount}}>
      <Component {...pageProps} />
      <Web3Modal projectId="9f606c7f046146b0dff0b70fbe3f9f64" ethereumClient={ethereumClient}/>
    </AppContext.Provider>
  ) 
}
