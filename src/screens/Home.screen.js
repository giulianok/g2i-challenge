import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <section>
    <header>
      <h1>Welcome to the Trivia Challenge</h1>
    </header>
    <main>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%</p>
    </main>
    <footer>
      <Link to="quiz">Begin</Link>
    </footer>
  </section>
)
