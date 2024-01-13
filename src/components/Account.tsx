"use client"
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'


export function Account(){
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const connector = connectors[0]
  return(
    <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          type="button"
          >
          Connect with {connector.name}
        </button>
        
        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect 
          </button>
        )}
        {error && <div>Error: {error?.message} </div>}
      </div>
  )
}
