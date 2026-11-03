import type { Location } from 'react-router'

import { DRAWER_PREROUTE_SET } from '../actions/set-drawer-preroute.js'

export type DrawerInState = {
  previousRoute: Partial<Location> | null
}

export const drawerReducer = (
  state: DrawerInState = { previousRoute: null },
  action: {
    type: string
    data: DrawerInState
  },
): DrawerInState => {
  switch (action.type) {
  case DRAWER_PREROUTE_SET: {
    return {
      ...state,
      ...action.data,
    }
  }
  default: {
    return state
  }
  }
}
