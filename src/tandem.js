class Tandem {
  constructor(user, language, date, time) {
    this.date = date
    this.language = language
    this.user = user
    this.time = time
  }

  get details() {
    // problem is that I am getting only 1 participant
    return `
# Tandem Details
## ${this.date} at ${this.time}

Language: ${this.language}

Participants:
- ${this.user.name}

`
  }
}

module.exports = Tandem
