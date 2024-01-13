'use client'

import Link from "next/link"

function App() {
  
  return (
    <>
      <h2>Actions</h2>
      <Link 
      href={"/token"}
      type="button"
      >
        ERC-20 Token Info
      </Link>
      <Link 
        href="/transfer" 
        type="button"
      >
        Transfer ERC-20 Token
      </Link>
    </>
  )
}

export default App
