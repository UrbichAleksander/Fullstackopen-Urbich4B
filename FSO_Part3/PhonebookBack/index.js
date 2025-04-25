const express = require('express')
const app = express()

app.use(express.json())

let persons =  [
        { 
          "id": "1",
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": "2",
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": "3",
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": "4",
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
    ]



app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find((person) => person.id === id)
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  
  app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

  const generateId = () => {
    const randomId = Math.random() * (1000000 - 4) + 4;
  return String(Math.round(randomId))
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const person = {
      content: body.content,
      important: body.important || false,
      id: generateId(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
    
  })


  const getDateTime = () => {
    var date = new Date()
    const day = date.toLocaleDateString('en-US', { weekday: 'short' })
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const dayOfMonth = date.getDate()
    const year = date.getFullYear()
    const time = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZoneName: 'long' 
      }
    const timeAndZone = date.toLocaleTimeString('en-GB', time)     

    return `${day} ${month} ${dayOfMonth} ${year} ${timeAndZone}`
}

app.get('/info', (request, response) => {
    response.send('<p>Phonebook has info for ' + persons.length.toString() + ' people </p>' + getDateTime())
 })
      
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})