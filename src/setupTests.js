// setup file
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

jest.mock('./config.js', () => ({
  quiz: {
    limit: 2,
    difficulty: 'hard',
    type: 'boolean',
  },
  api: '...',
}))

configure({ adapter: new Adapter() })
