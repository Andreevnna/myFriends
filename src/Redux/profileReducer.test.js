import profileReducer, { setStatus } from "./profileReducer"
let state = {
  status: ''
}

it('status profile should be change', () => {
  let action = setStatus('hi')
  
  let newState = profileReducer(state, action)
  expect(newState.status).toBe('hi')
})

