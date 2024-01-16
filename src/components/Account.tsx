"use client"
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'


export function Account(){
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const connector = connectors[0]
  return(


        <div className="border border-gray-300 p-2 m-2 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Account</h2>

          <div className="mb-4">
            <p>
              Status: {account.status}
              <br />
              Addresses: {JSON.stringify(account.addresses)}
              <br />
              Chain ID: {account.chainId}
            </p>
          </div>

          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Connect with {connector.name}
          </button>

          {account.status === 'connected' && (
            <button
              type="button"
              onClick={() => disconnect()}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Disconnect
            </button>
          )}

          {error && <div className="text-red-500 mt-4">Error: {error?.message}</div>}
        </div>
      );
  
  
}
