import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import Course from './components/Database'

function App() {
  
  const course = Course();

  return (
    <div>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Total obj={course[0].parts} />
      <hr />
      <Header course={course[1].name} />
      <Content parts={course[1].parts} />
      <Total obj={course[1].parts} />
    </div>
  )
}

export default App
