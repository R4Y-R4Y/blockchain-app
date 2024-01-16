"use client"
import { useReadErc20Name, useReadErc20Symbol } from "@/utils/erc20";
import { useState } from "react";
import { useAccount, useBalance, useReadContracts } from "wagmi";

export default function TokenPage() {
  const { address } = useAccount()
  const [tokenAddress, setTokenAddress] = useState<`0x${string}` | undefined>(undefined)
  const { 
    data: name, 
    error: errorName, 
    isLoading: isNameLoading 
  } = useReadErc20Name({
    address: tokenAddress,
  });

  const {
    data: symbol, 
    error: errorSymbol, 
    isLoading: isSymbolLoading
  } = useReadErc20Symbol({
    address: tokenAddress,
  });
  
  const {
    data: balance, 
    error: errorBalance, 
    isLoading: isBalanceLoading} = useBalance({
    address,
    token: tokenAddress,
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userInput = formData.get("token") as `0x${string}` | null;
    if (userInput?.startsWith("0x")) {
      setTokenAddress(`${userInput}`);
    }

  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Token Information</h2>
      <p className="mb-2">Insert ERC20 Token Contract:</p>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" name="token" className="border border-gray-300 rounded-md px-2 py-1 mr-2" />
        <button type="submit" disabled={isNameLoading && isSymbolLoading && isBalanceLoading} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" >Submit</button>
      </form>
      {isNameLoading ? <p>Loading...</p> : <p className="mb-2">Token Name: {name}</p>}
      {errorName && <h3 className="text-red-500 mb-2">Error: {errorName.cause.message}</h3>}
      {isSymbolLoading ? <p>Loading...</p> : <p className="mb-2">Symbol: {symbol}</p>}
      {errorSymbol && <h3 className="text-red-500 mb-2">Error: {errorSymbol.cause.message}</h3>}
      {isBalanceLoading ? <p>Loading...</p> : <p className="mb-2">Balance: {balance?.formatted}</p>}
      {errorBalance && <h3 className="text-red-500 mb-2">Error: {errorBalance.message}</h3>}
      
    </>
  );
}
//   return (
//     <>
//       <h2>Token Information</h2>
//       <p>Insert ERC20 Token Contract:</p>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="token"/>
//         <button type="submit" disabled={isNameLoading && isSymbolLoading && isBalanceLoading} >Submit</button>
//       </form>
//       {isNameLoading ? <p>Loading...</p> : <p>Token Name: {name}</p>}
//       {errorName && <h3>Error: {errorName.cause.message}</h3>}
//       {isSymbolLoading ? <p>Loading...</p> : <p>Symbol: {symbol}</p>}
//       {errorSymbol && <h3>Error: {errorSymbol.cause.message}</h3>}
//       {isBalanceLoading ? <p>Loading...</p> : <p>Balance: {balance?.formatted}</p>}
//       {errorBalance && <h3>Error: {errorBalance.message}</h3>}
//     </>
//   );
// }
