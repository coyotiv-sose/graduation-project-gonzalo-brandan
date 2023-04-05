const Tandem = require('./tandem')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  targetLanguage: String,
  offeredLanguage: String,
  tandems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tandem',
    },
  ],
  availability: [
    {
      date: String,
      time: String,
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rating',
    },
  ],
  rating: Number,
})

module.exports = mongoose.model('User', userSchema)

class User {
  tandems = []
  availability = []
  ratings = []
  rating = 5
  matchedAvailabilities = []

  constructor(name, targetLanguage, offeredLanguage) {
    this.name = name
    this.targetLanguage = targetLanguage
    this.offeredLanguage = offeredLanguage
  }

  // findMatchedAvailabilities(user, partner) {
  //   const { targetLanguage, offeredLanguage } = user
  //   const matchedAvailabilities = this.availability.filter(avail => {
  //     const { date, time } = avail
  //     const userAvailable = user.availability.some(avail => avail.date === date && avail.time === time)
  //     const partnerAvailable = partner.availability.some(avail => avail.date === date && avail.time === time)
  //     return (
  //       !user.tandems.some(tandem => tandem.date === date && tandem.time === time) &&
  //       !partner.tandems.some(tandem => tandem.date === date && tandem.time === time) &&
  //       userAvailable &&
  //       partnerAvailable &&
  //       (targetLanguage === partner.offeredLanguage || offeredLanguage === partner.offeredLanguage)
  //     )
  //   })
  //   console.log('Matched availabilities:', matchedAvailabilities)
  //   this.matchedAvailabilities.push(...matchedAvailabilities)
  // }

  // getMatchedAvailabilities() {
  //   return this.matchedAvailabilities
  // }

  initiateTandem(partner, language, date, time) {
    const tandem = Tandem.create({ user: this, partner, language, date, time })
    tandem.status = 'initiated'
    this.tandems.push(tandem)
    partner.tandems.push(tandem)
  }

  acceptTandem(tandem) {
    tandem.status = 'accepted'
    const { date } = tandem
    const { user, partner } = tandem
    ;[user, partner].forEach(u => {
      u.availability = u.availability.filter(avail => avail.date !== date) // remove availability for that date
    })
  }

  declineTandem(tandem) {
    tandem.status = 'declined'
  }

  cancelTandem(tandem) {
    tandem.status = 'cancelled'
  }

  get pendingAcceptanceTandems() {
    return this.tandems.filter(tandem => tandem.status === 'initiated' && tandem.partner === this)
  }

  rateUser(user, rating) {
    user.ratings.push(rating)
    const averageRating = user.ratings.reduce((sum, rating) => sum + rating, 0) / user.ratings.length
    user.rating = averageRating.toFixed(1)
  }

  addAvailability(date, time) {
    this.availability.push({ date, time })
  }

  removeAvailability(date, time) {
    this.availability = this.availability.filter(avail => avail.date !== date || avail.time !== time)
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

  static create({ name }) {
    const newUser = new User(name)

    User.list.push(newUser)
    return newUser
  }

  static list = []
}

//module.exports = User
