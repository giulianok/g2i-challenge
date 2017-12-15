export type PromiseAction<A> = Promise<A>
export type Dispatch<A> = (
  action: A | ThunkAction | PromiseAction<A> | Array<A>
) => any
export type ThunkAction<A> = (dispatch: Dispatch<A>) => any

export type QuestionAPIresult = {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[],
}

export type QuestionAPIresponse = {
  response_code: boolean,
  results: QuestionAPIresult[],
}
