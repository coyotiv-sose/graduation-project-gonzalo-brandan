class Tandem {
  constructor(user, partner, language, date, time, status) {
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

  static create({ user, partner, language, date, time, status }) {
    const tandem = new Tandem(user, partner, language, date, time, 'initiated')

    Tandem.list.push(tandem)

    return tandem
  }

  static list = []
}
module.exports = Tandem
