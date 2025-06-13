const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
  }
else if (process.argv.length === 4) {
    console.log('give the persons number')
    process.exit(1)
  }
  
  const password = process.argv[2]

  const url = `mongodb+srv://Strobenn:${password}@cluster0.6sclo6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  
  mongoose.set('strictQuery',false)
  
  mongoose.connect(url)
  
  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })
  
  const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
    const Name = process.argv[3]
    const Number = process.argv[4]
    
    const person = new Person({
        name: Name,
        number: Number,
      })

    person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
      })
}

else if (process.argv.length === 3) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person.name + " " + person.number)
        })
        mongoose.connection.close()
      })   
}