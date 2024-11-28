import type { Route } from './+types/product-detail'

export async function loader(args: Route.LoaderArgs) {
  const { params } = args

  // artificial 2 second delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  return {
    product: { id: params.pid },
  }
}

export default function ProductDetail({ loaderData }: Route.ComponentProps) {
  const { product } = loaderData
  return (
    <div>
      <h1>ProductDetail Route</h1>
      <pre>{JSON.stringify(product, null, 2) || 'nothing to preview'}</pre>
    </div>
  )
}
