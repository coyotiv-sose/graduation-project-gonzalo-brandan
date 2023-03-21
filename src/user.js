const Tandem = require('./tandem')

class User {
  language = ''
  sessions = []
  invitations = []
  availability = []
  // status changing in invitation so I create only one invitations array that it will change the status

  constructor(name) {
    this.name = name
  }

  bookSession(user, date, time) {
    const invitation = new Tandem(user, this.language, date, time)
    invitation.status = 'sent'
    this.invitations.push(invitation)
  }

  addAvailability(date, time) {
    this.availability.push({ date, time })
  }

  removeAvailability(date, time) {
    this.availability = this.availability.filter(avail => avail.date !== date || avail.time !== time)
  }

  acceptInvitation(invitation) {
    invitation.status = 'accepted'
    this.sessions.push(new Tandem(invitation.user, invitation.language, invitation.date, invitation.time))
    this.invitations = this.invitations.filter(invite => invite !== invitation)
  }

  get details() {
    return {
      name: this.name,
      language: this.language,
      sessions: this.sessions,
      invitations: this.invitations.map(invitation => ({
        user: invitation.user,
        language: invitation.language,
        date: invitation.date,
        time: invitation.time,
        status: invitation.status,
      })),
      availability: this.availability,
    }
  }
}

module.exports = User
