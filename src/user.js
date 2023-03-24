const Tandem = require('./tandem')

class User {
  tandems = []
  availability = []
  ratings = []
  rating = 5

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
      u.availability = u.availability.filter(avail => avail.date !== date) // remove availability for that date
    })
  }

  declineInvitation(tandem) {
    tandem.status = 'declined'
  }

  cancelSession(tandem) {
    tandem.status = 'cancelled'
  }

  rateUser(user, rating) {
    user.ratings.push(rating)
    const averageRating = user.ratings.reduce((sum, rating) => sum + rating, 0) / user.ratings.length
    user.rating = averageRating.toFixed(1)
  }

  get pendingAcceptanceTandems() {
    return this.tandems.filter(tandem => tandem.status === 'initiated' && tandem.partner === this)
  }

  get details() {
    return `Name: ${this.name}
Wants: ${this.targetLanguage}
Offers: ${this.offeredLanguage}
Rating: ${this.rating}
Tandems:\n${this.tandems
      .map(tandem => {
        let status = tandem.status

        if (status === 'initiated') {
          if (this === tandem.user) {
            status = 'sent'
          } else {
            status = 'received'
          }
        }

        return `- ${tandem.user.name} and ${tandem.partner.name} (${tandem.language}) on ${tandem.date} at ${tandem.time} (${status})`
      })
      .join('\n')}
Availability:\n${this.availability.map(avail => `- ${avail.date} at ${avail.time}`).join('\n')}
Matching Availabilities:`
  }
}

module.exports = User
