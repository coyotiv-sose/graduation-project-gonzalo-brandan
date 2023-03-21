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
    // accepted invitations are not being added to the sessions array
    invitation.status = 'accepted'
    const session = new Tandem(this, invitation.language, invitation.date, invitation.time)
    this.sessions.push(session)
    this.invitations = this.invitations.filter(invite => invite !== invitation)
  }

  get details() {
    return `
Name: ${this.name}
Language: ${this.language}
Sessions:
${this.sessions
  .map(
    session => `
- ${session.user.name} (${session.language}) on ${session.date} at ${session.time}`
  )
  .join('')}

Invitations:
${this.invitations
  .map(
    invitation => `
- ${invitation.user.name} (${invitation.language}) on ${invitation.date} at ${invitation.time} (${invitation.status})`
  )
  .join('')}

Availability:
${this.availability
  .map(
    avail => `
- ${avail.date} at ${avail.time}`
  )
  .join('')}
`
  }
}

module.exports = User
