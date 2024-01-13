"use client"
import { useReadErc20, useReadErc20TotalSupply } from "@/utils/erc20";
import { useState } from "react";

export default function TokenPage() {
  const [tokenAddress, setTokenAddress] = useState<`0x${string}` | undefined>(undefined)
  const { data, error, isLoading } = useReadErc20TotalSupply({
    address: tokenAddress,
  })


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userInput = formData.get("token") as `0x${string}` | null;
    if (userInput) {
      setTokenAddress(`${userInput}`);
    }
    console.log(tokenAddress, data, isLoading, error)

  };

  return (
    <>
      <h2>Token Information</h2>
      <p>Insert ERC20 Token Contract:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="token"/>
        <button type="submit" disabled={isLoading} >Submit</button>
      </form>
      {isLoading ? <p>Loading...</p> : <p>{data?.toString()}</p>}
      {error && <h3>Error: {error.message}</h3>}
    </>
  );
}
