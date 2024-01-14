import { useWriteErc20Transfer } from "@/utils/erc20";
import { useState } from "react";
import { parseEther } from "viem";
import { useAccount } from "wagmi";

export default function TransferPage(){
  const { address } = useAccount()
  const [recieverAddress, setRecieverAddress] = useState<`0x${string}` | undefined>(undefined)
  const {writeContract} = useWriteErc20Transfer();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const tokenAddress = formData.get("token") as `0x${string}` | undefined;
    const recieverAddress = formData.get("reciever") as `0x${string}` | undefined;
    const amount = formData.get("amount")?.toString()
    if (tokenAddress && tokenAddress.startsWith("0x") && 
    recieverAddress && recieverAddress.startsWith("0x") && amount) {
      writeContract({
        address: tokenAddress,
        args:[recieverAddress, parseEther(amount)]
      })
    }
    else{
    }

  };
  
  return(<>
    <form onSubmit={handleSubmit}>
      <input type="text" name="token"/>
      <button type="submit">Submit</button>
    </form>
  </>)
}