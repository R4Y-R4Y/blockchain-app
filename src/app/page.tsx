import Link from "next/link"

function App() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Actions</h2>
      <Link href="/token" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 mr-4 inline-block">
        ERC-20 Token Info
      </Link>
      <Link href="/transfer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mb-2 inline-block">
        Transfer ERC-20 Token
      </Link>
    </>
  )
}

export default App
