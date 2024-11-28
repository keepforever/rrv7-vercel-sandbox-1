import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  // foo
  layout('routes/layout.tsx', [index('routes/home.tsx'), route('monkey', 'routes/monkey.tsx')]),
  route('alpha', 'routes/alpha.tsx', [route('beta', 'routes/beta.tsx')]),
] satisfies RouteConfig
