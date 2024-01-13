import { http, createConfig } from 'wagmi'
import { goerli, mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [
    goerli
  ],
  
  connectors: [
    metaMask(),
  ],
  ssr: true,
  transports: {
    [goerli.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
