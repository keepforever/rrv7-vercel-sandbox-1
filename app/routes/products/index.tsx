import { Link, Outlet } from 'react-router'
import type { Route } from './+types/index'

const products = [
  { id: '1', name: 'Product 1' },
  { id: '2', name: 'Product 2' },
  { id: '3', name: 'Product 3' },
]

export default function Index() {
  return (
    <div className="p-6 font-sans">
      <h1 className="mb-4 text-2xl font-bold">Products Index Route</h1>
      <ul className="list-none p-0">
        {products.map(product => (
          <li key={product.id} className="mb-2">
            <Link to={product.id} className="text-blue-500 hover:underline">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}
