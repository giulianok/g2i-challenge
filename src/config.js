const quiz = {
  limit: 2,
  difficulty: 'hard',
  type: 'boolean',
}

export default {
  quiz,
  api: `https://opentdb.com/api.php?amount=${quiz.limit}&difficulty=${
    quiz.difficulty
  }&type=${quiz.type}`,
}
