import { createContext } from "react";

type AppContent = {
    provider: object,
    setProvider:(p: object) => void,
    account: string[],
    setAccount:(a: any) => void,
}

const AppContext = createContext<AppContent>({provider: {}, setProvider: () => {}, account: [], setAccount: () => {}});

export default AppContext;