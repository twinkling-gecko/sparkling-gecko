import { Middleware } from '@nuxt/types'

const requireLogin: Middleware = ({ store, redirect }) => {
  if (!store.getters.isAuthenticated) {
    return redirect('/')
  }
}

export default requireLogin
