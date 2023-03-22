const Tandem = require('./tandem')

class User {
  //language = ''
  tandems = []
  availability = []

  constructor(name, targetLanguage, offeredLanguage) {
    this.name = name
    this.targetLanguage = targetLanguage
    this.offeredLanguage = offeredLanguage
  }

  bookSession(partner, date, time) {
    const tandem = new Tandem(this, partner, this.language, date, time)
    this.tandems.push(tandem)
  }

  addAvailability(date, time) {
    this.availability.push({ date, time })
  }

  removeAvailability(date, time) {
    this.availability = this.availability.filter(avail => avail.date !== date || avail.time !== time)
  }

  acceptInvitation(tandem) {
    tandem.status = 'accepted'
    const session = new Tandem(this, tandem.user, tandem.language, tandem.date, tandem.time)
    this.tandems.push(session)
    this.tandems = this.tandems.filter(tandemItem => tandemItem !== tandem)
  }

  get details() {
    return `
Name: ${this.name}
Wants: ${this.targetLanguage}
Offers: ${this.offeredLanguage}
Tandems:
${this.tandems
  .map(
    tandem => `
- ${tandem.user.name} and ${tandem.partner.name} (${tandem.language}) on ${tandem.date} at ${tandem.time} (${tandem.status})`
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
