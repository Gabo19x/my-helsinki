import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

function App() {
  // Variables
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content obj={course.parts} />
      <Total obj={course.parts} />
    </div>
  )
}

export default App