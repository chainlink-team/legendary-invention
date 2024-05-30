import {createPublicClient, http, createWalletClient, custom} from 'viem'
import { polygonMumbai, avalancheFuji, mainnet } from 'viem/chains'

export const publicMainnetClient = createPublicClient({
	chain: mainnet,
	transport: http(),
})

export const publicMumbaiClient = createPublicClient({
	chain: polygonMumbai,
	transport: http(),
});

export const walletMumbaiClient = createWalletClient({
	chain: polygonMumbai,
	transport: custom(window.ethereum)
})

export const publicFujiClient = createPublicClient({
	chain: avalancheFuji,
	transport: http()
});

export const walletFujiClient = createWalletClient({
	chain: avalancheFuji,
	transport: custom(window.ethereum)
})