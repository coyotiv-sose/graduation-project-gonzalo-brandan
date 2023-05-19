const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const tandemSchema = new mongoose.Schema({
  date: String,
  language: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: { maxDepth: 1 },
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: { maxDepth: 1 },
  },
  time: String,
  status: String,
})

tandemSchema.plugin(autopopulate)
class Tandem {
  // todo: method: get upcoming tandems
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

tandemSchema.loadClass(Tandem)

module.exports = mongoose.model('Tandem', tandemSchema)
