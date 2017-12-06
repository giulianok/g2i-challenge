/*
export const __SET_RESULT = () => {}

export default new Promise((resolve, reject) => {
  console.log('data')
  resolve()
})
*/

let _ok = false
let _data

const request = () =>
  new Promise((resolve, reject) => {
    if (_ok) {
      resolve(_data)
    } else {
      reject()
    }
  })

request.__SET_RESULT = (ok, data) => {
  _ok = ok
  _data = data
}

export default request
