const Tandem = require('./tandem')

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

module.exports = User
