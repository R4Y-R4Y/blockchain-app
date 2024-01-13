import { defineConfig } from '@wagmi/cli'
import { erc20Abi } from 'viem'
import { react } from '@wagmi/cli/plugins'
export default defineConfig({
  out: 'src/utils/erc20.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20Abi,
    },
  ],
  plugins: [
    react(),
  ],
})
