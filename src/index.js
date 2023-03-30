const Tandem = require('./tandem')
const User = require('./user')
const axios = require('axios')

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
// rename methods for consistency
// end session?
// rate sessions after completed. If not completed, no rating.
// send message to user after session? hey did you complete the session? rate it if yes
// after endSession, add messaging system where gonzalo add comment into session, not to maria.

//axios.get('http://localhost:3000/users').then(response => {
//  console.log(response.data)
//})

async function main() {
  await axios.post('http://localhost:3000/users', {
    name: 'Gonzalo',
    targetLanguage: 'German',
    offeredLanguage: 'Spanish',
  })

  await axios.post('http://localhost:3000/users', {
    name: 'Maria',
    targetLanguage: 'Spanish',
    offeredLanguage: 'German',
  })

  await axios.post('http://localhost:3000/users/Gonzalo/tandems', {
    partner: 'Maria',
    language: 'German',
    date: '2020-01-01',
    time: '12:00',
  })

  await axios.post('http://localhost:3000/users/Maria/tandems', {
    partner: 'Gonzalo',
    language: 'Spanish',
    date: '2020-01-01',
    time: '19:00',
  })

  const allUsers = await axios.get('http://localhost:3000/users')

  console.log('List of all users', allUsers.data)
}

main()

// const gonzalo = new User('Gonzalo', 'German', 'Spanish')
// const maria = new User('Maria', 'Spanish', 'German')

// gonzalo.addAvailability('2020-01-03', '16:00')
// gonzalo.addAvailability('2020-01-02', '14:00')
// gonzalo.addAvailability('2020-01-01', '12:00')

// maria.addAvailability('2020-01-01', '12:00')
// maria.addAvailability('2020-01-01', '19:00')

// gonzalo.bookSession(maria, 'German', '2020-01-01', '12:00')
// gonzalo.bookSession(maria, 'Spanish', '2020-01-01', '19:00')
// gonzalo.bookSession(maria, 'German', '2020-01-02', '14:00')
// gonzalo.bookSession(maria, 'Spanish', '2020-01-03', '16:00')

// maria.bookSession(gonzalo, 'Spanish', '2020-01-10', '18:00')

// maria.acceptInvitation(gonzalo.tandems[3])
// //gonzalo.declineInvitation(maria.tandems[0])
// //maria.cancelSession(gonzalo.tandems[3])

// maria.rateUser(gonzalo, 4)
// maria.rateUser(gonzalo, 5)
// //gonzalo.rateUser(maria, 1)
// //gonzalo.rateUser(maria, 4)

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

// console.log('#'.repeat(50))
// // console how many tandems maria has received
// console.log(
//   `Maria has ${maria.tandems.length} tandems. Which:
//   -Received: ${maria.tandems.filter(tandem => tandem.partner === maria).length}
//   -Sent: ${maria.tandems.filter(tandem => tandem.user === maria).length}
//   -Not accepted yet: ${maria.pendingAcceptanceTandems.length}
//   -Accepted: ${maria.tandems.filter(tandem => tandem.status === 'accepted').length}
//   -Declined: ${maria.tandems.filter(tandem => tandem.status === 'declined').length}
//   -List of rankings received: ${maria.ratings}`
// )

// // console tandems that maria has received and not accepted yet
// //console.log(maria.pendingAcceptanceTandems)
