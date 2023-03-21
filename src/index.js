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

const gonzalo = new User('Gonzalo', 'spanish')
const maria = new User('Maria', 'german')

gonzalo.bookSession(maria, '2020-01-01', '12:00')
//console.log(`gonzalo's sessions: ${gonzalo.sessions.length === 1}`)

gonzalo.bookSession(maria, '2020-01-01', '12:00')
// console.log(`gonzalo's sessions: ${gonzalo.sessions.length === 2}`)

// gonzalo.addAvailability('2020-01-01', '12:00')
// console.log(`gonzalo's availability: ${gonzalo.availability.length === 1}`)

// gonzalo.addAvailability('2020-01-01', '14:00')
// gonzalo.removeAvailability('2020-01-01', '14:00')

// gonzalo.invite(maria, '2020-01-01', '12:00')
// console.log(`gonzalo's invitations: ${gonzalo.invitations.length === 1}`)

maria.acceptInvitation(gonzalo.invitations[0])
// console.log(`gonzalo's invitations: ${gonzalo.invitationsToConfirm.length === 0}`);

// console.log(gonzalo)
// console.log('#'.repeat(50))
// console.log(maria)

// how to get the details of gonzalo using getters?
console.log('#'.repeat(50))
console.log(gonzalo.details)
console.log('#'.repeat(50))
console.log(maria.details)
console.log('#'.repeat(50))
console.log(maria.sessions[0].details)
