class Tandem {
  constructor(user, language, date, time) {
    this.date = date
    this.language = language
    this.user = user
    this.time = time
  }

  get details() {
    //task of today: implement profiles!
    return {
      date: this.date,
      language: this.language,
      users: this.users, // how to get the name of both users?
      time: this.time,
    }
  }
}

module.exports = Tandem
