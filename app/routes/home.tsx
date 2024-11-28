import { Link } from 'react-router'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_VERCEL }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">Home.tsx</h1>

        <div className="rounded-lg bg-white p-6 shadow">
          {loaderData.message && (
            <div className="mt-6 rounded-md bg-gray-50 p-4 text-gray-600">
              <p>Message from Vercel: {loaderData.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
