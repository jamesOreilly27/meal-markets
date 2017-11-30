import Web3 from 'web3'
import store from './index'

export const WEB3_INITIALIZED = 'WEB3_INITIALIZED'

export const web3Initialized = results => ({
  type: WEB3_INITIALIZED,
  payload: results
})

export const getWeb3 = new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', dispatch => {
    let results
    let web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)
      results = { web3Instance: web3 }
      console.log('Injected web3 detected.')
      resolve(store.dispatch(web3Initialized(results)))
    } else {
      // Fallback to localhost if no web3 injection.
      const provider = new Web3.providers.HttpProvider('http://localhost:7545')
      web3 = new Web3(provider)
      results = { web3Instance: web3 }
      console.log('No web3 instance injected, using Local web3.')
      resolve(store.dispatch(web3Initialized(results)))
    }
  })
})

const initialState = { web3Instance: null }

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case WEB3_INITIALIZED:
      return {
        ...state,
        web3Instance: action.payload.web3Instance
      }
    default:
      return state
  }
}

export default web3Reducer
