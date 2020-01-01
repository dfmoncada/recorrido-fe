import React from 'react'
import useRoutes from './useRoutes'

function RouteSearch() {
  const { routes } = useRoutes()

  return (
    <>
      <div>route search placeholder</div>
      <div>
        placeholder for routes {routes.map(r => r.name).join(', ')}
      </div>
    </>
  )
}

export default RouteSearch
