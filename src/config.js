const quiz = {
  limit: 10,
  difficulty: 'hard',
  type: 'boolean',
}

export default {
  quiz,
  api: `https://opentdb.com/api.php?amount=${quiz.limit}&difficulty=${
    quiz.difficulty
  }&type=${quiz.type}`,
}
