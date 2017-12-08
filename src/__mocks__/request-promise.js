let _ok = false
let _data
let _delay

const request = () =>
  new Promise((resolve, reject) => {
    if (_ok) {
      if (_delay) setTimeout(() => resolve(_data), _delay)
      else resolve(_data)
    } else {
      reject()
    }
  })

request.__SET_RESULT = (ok, data, delay) => {
  _ok = ok
  ;(_data = data), (_delay = delay)
}

export default request
