const Tandem = require('./tandem')
const User = require('./user')

console.log("Hi coyote, let's have some JavaScript fun!")
console.log('Lingolink is a tandem language learning app for german and spanish')

// I need to be able to create an user
// I need to be able to book a session
// I need to be able to cancel a session
// I need to be able to see all my sessions
// I need to see other users
// I need to see other users that match my availability and language
// I need to be able to rate a user
// I need to be able to invite a user to a session
// I need to be able to see all my invitations
// I need to be able to accept an invitation
// I need to be able to decline an invitation
// I need to be able to see my availability updated after accepting or declining an invitation
// I need to be able to see my availability updated after booking a session
// You have to earn points giving sessions and receiving sessions

const gonzalo = new User('Gonzalo', 'German', 'Spanish')
const maria = new User('Maria', 'Spanish', 'German')

gonzalo.bookSession(maria, 'German', '2020-01-01', '12:00')
console.log(`gonzalo's tandems: ${gonzalo.tandems.length === 1}`)

gonzalo.bookSession(maria, 'Spanish', '2020-01-01', '19:00')
console.log(`gonzalo's tandems: ${gonzalo.tandems.length === 2}`)

gonzalo.addAvailability('2020-01-01', '12:00')
console.log(`gonzalo's availability: ${gonzalo.availability.length === 1}`)

gonzalo.addAvailability('2020-01-01', '14:00')
gonzalo.removeAvailability('2020-01-01', '14:00')

gonzalo.bookSession(maria, 'German', '2020-01-02', '14:00')
console.log(`gonzalo's tandems: ${gonzalo.tandems.length === 3}`)
console.log(`gonzalo's availability: ${gonzalo.availability.length === 1}`)

gonzalo.bookSession(maria, 'Spanish', '2020-01-03', '16:00')
console.log(`gonzalo's invitations: ${gonzalo.tandems.length === 4}`)

maria.acceptInvitation(gonzalo.tandems[3])
console.log(`gonzalo's invitations: ${gonzalo.tandems.length === 3}`)
console.log(`gonzalo's availability: ${gonzalo.availability.length === 0}`)

maria.bookSession(gonzalo, 'Spanish', '2020-01-10', '18:00')
gonzalo.acceptInvitation(maria.tandems[0]) //I am having to accept the invitation from maria to gonzalo to change that value, it should not be necessary
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
