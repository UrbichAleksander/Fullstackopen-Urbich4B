import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Obsługa dodawania nowej osoby
  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    
    if (duplicate) {
      alert(`${newName} jest już w książce telefonicznej`)
      return
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={(e) => {
        console.log('Aktualny filtr:', e.target.value)
        setFilter(e.target.value)
      }} />

      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={(e) => {
          console.log('Wpisana nazwa:', e.target.value) 
          setNewName(e.target.value)
        }}
        newNumber={newNumber}
        handleNumberChange={(e) => {
          console.log('Wpisany numer:', e.target.value) 
          setNewNumber(e.target.value)
        }}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
