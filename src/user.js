const Tandem = require('./tandem')

class User {
  tandems = []
  availability = []

  constructor(name, targetLanguage, offeredLanguage) {
    this.name = name
    this.targetLanguage = targetLanguage
    this.offeredLanguage = offeredLanguage
  }

  bookSession(partner, language, date, time) {
    const tandem = new Tandem(this, partner, language, date, time)
    tandem.status = 'initiated'
    this.tandems.push(tandem)
    partner.tandems.push(tandem)
  }

  addAvailability(date, time) {
    this.availability.push({ date, time })
  }

  removeAvailability(date, time) {
    this.availability = this.availability.filter(avail => avail.date !== date || avail.time !== time)
  }

  acceptInvitation(tandem) {
    tandem.status = 'accepted'
    const { date } = tandem
    const { user, partner } = tandem
    ;[user, partner].forEach(u => {
      u.availability = u.availability.filter(avail => avail.date !== date)
    })
  }

  declineInvitation(tandem) {
    tandem.status = 'declined'
  }

  cancelSession(tandem) {
    tandem.status = 'cancelled'
  }

  get details() {
    return `Name: ${this.name}
Wants: ${this.targetLanguage}
Offers: ${this.offeredLanguage}
Tandems:\n${this.tandems
      .map(tandem => {
        let status = tandem.status

        if (status === 'initiated') {
          if (this === tandem.user) {
            status = 'sent'
          } else {
            status = 'received'
          }
        } else if (status === 'accepted') {
          status = 'accepted'
        } else if (status === 'cancelled') {
          status = 'cancelled'
        } else if (status === 'declined') {
          status = 'declined'
        }

        return `- ${tandem.user.name} and ${tandem.partner.name} (${tandem.language}) on ${tandem.date} at ${tandem.time} (${status})`
      })
      .join('\n')}
Availability:\n${this.availability.map(avail => `- ${avail.date} at ${avail.time}`).join('\n')}`
  }
}

module.exports = User
