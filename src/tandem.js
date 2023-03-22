class Tandem {
  constructor(user, partner, language, date, time, status = 'sent') {
    this.date = date
    this.language = language
    this.user = user
    this.partner = partner
    this.time = time
    this.status = status // added status property
  }

  get details() {
    return `
# Tandem Details
## ${this.date} at ${this.time}

Language: ${this.language}

Participants:
- ${this.user.name}
- ${this.partner.name}

`
  }
}

module.exports = Tandem
