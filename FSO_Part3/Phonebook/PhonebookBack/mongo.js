const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://Strobenn:${password}@cluster0.6sclo6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  content: 'HTML is easy',
  important: true,
})

person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})