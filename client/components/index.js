/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Navbar } from './Navbar'
export { default as UserHome } from './user-home'
export { Login, Signup, EatersLanding, RedeemOrder, RedeemConfirmation } from './containers'
