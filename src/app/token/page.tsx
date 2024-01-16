"use client"
import { useReadErc20Name, useReadErc20Symbol } from "@/utils/erc20";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BaseError } from "viem";
import { useAccount, useBalance, useReadContracts } from "wagmi";

export default function TokenPage() {
  const router = useRouter()
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
    if (!userInput?.startsWith("0x")) {
      alert("Invalid input! Token field is not a hash address!")
    }
    else{
      setTokenAddress(`${userInput}`);
    }
  };
  
  console.log(balance)
  return (
    <div className="max-w-md mx-auto border border-blue-500 p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">ERC20 Token Information</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="token" className="block text-sm font-bold mb-2">Token:</label>
          <input type="text" name="token" className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex justify-between">
          <button type="submit" disabled={isNameLoading || isSymbolLoading || isBalanceLoading} className="bg-blue-500 hover:bg-blue-600 disabled:bg-slate-500 text-white px-4 py-2 rounded-md" >Submit</button>
          <button type="button" onClick={() => router.push("/")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end">Back to home page</button>
        </div>
      </form>
      {isNameLoading ? <p>Loading...</p> : <p className="mb-2">Token Name: {name}</p>}
      {isSymbolLoading ? <p>Loading...</p> : <p className="mb-2">Symbol: {symbol}</p>}
      {isBalanceLoading ? <p>Loading...</p> : <p className="mb-2">Balance: {balance?.formatted}</p>}
      <h3 className="text-red-500">{(errorName as BaseError)?.shortMessage || errorName?.message}</h3>
    </div>
  );
}
