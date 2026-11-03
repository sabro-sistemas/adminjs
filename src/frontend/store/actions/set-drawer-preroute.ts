import type { Location } from 'react-router'

export const DRAWER_PREROUTE_SET = 'DRAWER_PREROUTE_SET'

export type SetDrawerPreRouteResponse = {
  type: typeof DRAWER_PREROUTE_SET
  data: {
    previousRoute: Partial<Location> | null
  }
}

export const setDrawerPreRoute = (data: {
  previousRoute: Partial<Location> | null
}): SetDrawerPreRouteResponse => ({
  type: DRAWER_PREROUTE_SET,
  data,
})
