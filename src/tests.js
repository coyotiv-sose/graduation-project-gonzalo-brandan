const axios = require('axios')
const Tandem = require('./models/tandem')
const User = require('./models/user')

axios.defaults.baseURL = 'http://localhost:3000'

console.log('Lingolink is a language exchange platform')

// I need to be able to create an user+
// I need to be able to see all my sessions
// I need to see other users
// I need to be able to see all my pending invitations +
// I need to be able to accept an invitation +
// I need to be able to decline an invitation +
// I need to be able to see my availability updated after accepting an invitation +
// I need to be able to see my availability updated after booking a session +
// You have to earn points giving sessions and receiving sessions
// user has composition relationship with tandems, if user is deleted, tandems are deleted
// user has composition relationship with availability, if user is deleted, availability is deleted
// user has aggregation relationship with ratings, if user is deleted, ratings are not deleted
// create a leaderboard with people with more sessions given and received

async function main() {
  const gonzalo = await axios.post('/users', {
    name: 'Gonzalo',
  })

  const maria = await axios.post('/users', {
    name: 'Maria',
  })

  const allUsers = await axios.get('/users?view=json')
  console.log('List of all users', allUsers.data)

  const gonzaloTandem = await axios.post('/tandems', {
    user: gonzalo.data._id,
    partner: maria.data._id,
    language: 'Spanish',
    date: '2020-01-01',
    time: '12:00',
  })

  //console.log(gonzaloTandem.data)
  //const gonzaloTandem = await axios.post('http://localhost:3000/tandems', {
  //  user: gonzalo.data.name,
  //  partner: maria.data.name,
  //  language: 'Spanish',
  //  date: '2020-01-01',
  //  time: '12:00',
  //})

  // console.log(gonzaloTandem.data)
}

main().catch(error => console.log(error.message ? error.message : error))

//name change session to tandems
// const gonzalo = new User('Gonzalo', 'German', 'Spanish')
// const maria = new User('Maria', 'Spanish', 'German')
// //
// gonzalo.addAvailability('2020-01-03', '16:00')
// gonzalo.addAvailability('2020-01-02', '14:00')
// gonzalo.addAvailability('2020-01-01', '12:00')
// //
// maria.addAvailability('2020-01-01', '12:00')
// maria.addAvailability('2020-01-01', '19:00')
// //
// //gonzalo.bookSession(maria, 'German', '2020-01-01', '12:00')
// gonzalo.bookSession(maria, 'Spanish', '2020-01-01', '19:00')
// gonzalo.bookSession(maria, 'German', '2020-01-02', '14:00')
// gonzalo.bookSession(maria, 'Spanish', '2020-01-03', '16:00')
// //
// maria.bookSession(gonzalo, 'Spanish', '2020-01-10', '18:00')
// //
// maria.acceptInvitation(gonzalo.tandems[3])
// gonzalo.declineInvitation(maria.tandems[0])
// maria.cancelSession(gonzalo.tandems[3])
// // rename methods for consistency
// // end session?
// // rate sessions after completed. If not completed, no rating.
// // send message to user after session? hey did you complete the session? rate it if yes
// // after endSession, add messaging system where gonzalo add comment into session, not to maria.
// maria.rateUser(gonzalo, 4)
// maria.rateUser(gonzalo, 5)
// gonzalo.rateUser(maria, 1)
// gonzalo.rateUser(maria, 4)
// console.log('#'.repeat(50))
// console.log(`maria has received ${maria.ratings.length} ratings`)
// console.log('#'.repeat(50))
// console.log(gonzalo.details)
// console.log('#'.repeat(50))
// console.log(maria.details)
// console.log('#'.repeat(50))
// const tandemSession = gonzalo.tandems
//   .concat(maria.tandems)
//   .find(
//     tandem =>
//       (tandem.user === gonzalo && tandem.partner === maria) || (tandem.user === maria && tandem.partner === gonzalo)
//   )
// console.log(tandemSession.details)
// //
