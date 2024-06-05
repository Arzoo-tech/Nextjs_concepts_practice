import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      {/* We don't send a new req to the server with the help of <Link/>
      and can do client side routing  */}
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  )
}
