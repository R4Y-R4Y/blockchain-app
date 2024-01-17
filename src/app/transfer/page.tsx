"use client"
import { useWriteErc20Transfer } from "@/utils/erc20";
import { BaseError, parseEther } from "viem";
import { useRouter } from 'next/navigation'
import { useAccount } from "wagmi";
import Link from "next/link";
export default function TransferPage(){
  const { data, isPending, isSuccess, error, writeContract } = useWriteErc20Transfer();
  const router = useRouter()
  const { status } = useAccount()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const tokenAddress = formData.get("token") as `0x${string}` | undefined;
    const recieverAddress = formData.get("reciever") as `0x${string}` | undefined;
    const amount = formData.get("amount")?.toString()
    if (status !== 'connected') {
      alert("You need to be connected to Transfer ERC20 Tokens!")
    }
    else if(!(tokenAddress && tokenAddress.startsWith("0x"))){
      alert("Invalid input! Reciever field is not a hash address!")
    }
    else if(!(recieverAddress && recieverAddress.startsWith("0x"))){
      alert("Invalid input! Reciever field is not a hash address!")
    }
    else if(!amount || isNaN(Number(amount))){
      alert("Invalid input! Amount is not a number!")
    }
    else{
      writeContract({
        address: tokenAddress,
        args:[recieverAddress, parseEther(amount)]
      })
    }

  };
  
  return(
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 border border-blue-500 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Transfer ERC20 Token</h2>
      <div className="mb-4">
        <label htmlFor="token" className="block text-sm font-bold mb-2">Token:</label>
        <input type="text" name="token" className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="reciever" className="block text-sm font-bold mb-2">Receiver:</label>
        <input type="text" name="reciever" className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-bold mb-2">Amount:</label>
        <input type="text" name="amount" className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Transfer</button>
        <button type="button" onClick={() => router.push("/")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end">Back to home page</button>
      </div>
      {isPending && <p>Loading...</p>}
      {isSuccess && <>
        <p>Transaction done successfully!</p>
        <Link 
          href={"https://sepolia.etherscan.io/tx/" + data} 
          className="text-blue-500 underline hover:text-blue-700" 
          target="_blank" rel="noreferrer"
        >
          Check it here
        </Link>
      </> }
      {error &&  <h3 className="text-red-500 mb-2">Error: 
        {(error as BaseError).shortMessage || error.message}
      </h3>}
    </form>
  );
}
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       Token:
  //       <input type="text" name="token"/>
  //     </div>
  //     <div>
  //       Reciever:
  //       <input type="text" name="reciever"/>
  //     </div>
  //     <button type="submit">Transfer</button>
  //   </form>
  // </>)
// }