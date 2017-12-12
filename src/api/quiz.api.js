import config from '../config'

export const getAllQuestions = () =>
  fetch(config.api)
    .then(response => response.json())
    .catch(error => error)
