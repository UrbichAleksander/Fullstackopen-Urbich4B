const Header = (course) => {
    console.log(course)
    return (
     <div>
     <h2 key={course.id}>{course.name}</h2>
     </div>
    )
}

const Part = ({ parts }) => {
    return (
    <div>
        {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </div>
    )
}

const Content = (course) => {
    console.log(course)
    return (
    <div>
      <Part parts = {course.parts}/>
    </div>
    )
}

const Total = (parts) => {
    console.log(parts)
    const total = parts.reduce((sum,part) => sum+part.exercises, 0)
    return (
      <p>
        <strong>Total of exercises {total}</strong>
      </p>
    )
  }

const Course = ( {courses} ) => {
    console.log("Course Started")
    return (
    <div>
        <h1>Web development curriculum</h1>
        {courses.map(course => {
            return (
            <div  key={course.id}>
                {Header(course)}
                {Content(course)}
                {Total(course.parts)}
            </div>
            )}
        )}
    </div>
    )
} 

export default Course