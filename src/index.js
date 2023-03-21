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

// i have to have 2 diferent classes, with sender and receiver?
class User {
  language = ''
  sessions = []
  invitationsToConfirm = []
  invitationsAccepted = []
  invitationsSent = []
  availability = []
  // status changing in invitation so I create only one invitations array that it will change the status

  constructor(name) {
    this.name = name
  }

  bookSession(user, date, time) {
    const session = new Tandem(user, this.language, date, time)
    this.sessions.push(session)
  }

  addAvailability(date, time) {
    this.availability.push({ date, time })
  }

  removeAvailability(date, time) {
    this.availability.pop({ date, time })
  }

  invite(user, date, time) {
    const invitation = new Tandem(user, this.language, date, time)
    user.invitationsToConfirm.push(invitation)
    this.invitationsSent.push(invitation)
    // how to delete the invitation sent from the list, after other user confirmed?
  }

  acceptInvitation(user, date, time) {
    this.bookSession(user, date, time)
    this.removeAvailability(date, time)
    this.invitationsToConfirm.pop()
    this.invitationsAccepted.push({ user, date, time })
  }
}

class Tandem {
  constructor(user, language, date, time) {
    this.date = date
    this.language = language
    this.user = user
    this.time = time
  }
}

const gonzalo = new User('Gonzalo')
const maria = new User('Maria')

gonzalo.bookSession(maria, '2020-01-01', '12:00')
console.log(`gonzalo's sessions: ${gonzalo.sessions.length === 1}`)

gonzalo.bookSession(maria, '2020-01-01', '12:00')
console.log(`gonzalo's sessions: ${gonzalo.sessions.length === 2}`)

gonzalo.addAvailability('2020-01-01', '12:00')
console.log(`gonzalo's availability: ${gonzalo.availability.length === 1}`)

gonzalo.addAvailability('2020-01-01', '14:00')
gonzalo.removeAvailability('2020-01-01', '14:00')

gonzalo.invite(maria, '2020-01-01', '12:00')
console.log(`gonzalo's invitations: ${gonzalo.invitationsToConfirm.length === 1}`)

// maria.acceptInvitation(gonzalo, "2020-01-01", "12:00");
// console.log(`gonzalo's invitations: ${gonzalo.invitationsToConfirm.length === 0}`);

console.log(gonzalo)
console.log('#'.repeat(50))
console.log(maria)
