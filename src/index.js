const Tandem = require('./tandem')
const User = require('./user')

console.log("Hi coyote, let's have some JavaScript fun!")
console.log('Lingolink is a tandem language learning app for german and spanish')

const gonzalo = new User('Gonzalo', 'German', 'Spanish')
const maria = new User('Maria', 'Spanish', 'German')

gonzalo.bookSession(maria, '2020-01-01', '12:00')
console.log(`gonzalo's tandems: ${gonzalo.tandems.length === 1}`)

gonzalo.bookSession(maria, '2020-01-01', '19:00')
console.log(`gonzalo's tandems: ${gonzalo.tandems.length === 2}`)

gonzalo.addAvailability('2020-01-01', '12:00')
console.log(`gonzalo's availability: ${gonzalo.availability.length === 1}`)

gonzalo.addAvailability('2020-01-01', '14:00')
gonzalo.removeAvailability('2020-01-01', '14:00')

gonzalo.bookSession(maria, '2020-01-02', '14:00')
console.log(`gonzalo's tandems: ${gonzalo.tandems.length === 3}`)
console.log(`gonzalo's availability: ${gonzalo.availability.length === 1}`)

gonzalo.bookSession(maria, '2020-01-03', '16:00')
console.log(`gonzalo's invitations: ${gonzalo.tandems.length === 4}`)

maria.acceptInvitation(gonzalo.tandems[3])
console.log(`gonzalo's invitations: ${gonzalo.tandems.length === 3}`)
console.log(`gonzalo's availability: ${gonzalo.availability.length === 0}`)

console.log('#'.repeat(50))
console.log(gonzalo.details)
console.log('#'.repeat(50))
console.log(maria.details)
console.log('#'.repeat(50))
const tandemSession = gonzalo.tandems
  .concat(maria.tandems)
  .find(
    tandem =>
      (tandem.user === gonzalo && tandem.partner === maria) || (tandem.user === maria && tandem.partner === gonzalo)
  )
console.log(tandemSession.details)
