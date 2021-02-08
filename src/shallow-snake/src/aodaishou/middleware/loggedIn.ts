import { Middleware } from '@nuxt/types'

const loggedIn: Middleware = ({ store, redirect }) => {
  if (!store.getters.isAuthenticated) {
    return redirect('/')
  }
}

export default loggedIn
