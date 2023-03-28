const Tandem = require('./tandem')
const User = require('./user')

console.log('Lingolink is a language exchange platform')

// I need to be able to create an user
// I need to be able to book a session +
// I need to be able to cancel a session +
// I need to be able to see all my sessions
// I need to see other users
// I need to see other users that match my availability and language
// I need to be able to rate a user
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

const gonzalo = new User('Gonzalo', 'German', 'Spanish')
const maria = new User('Maria', 'Spanish', 'German')

gonzalo.addAvailability('2020-01-03', '16:00')
gonzalo.addAvailability('2020-01-02', '14:00')
gonzalo.addAvailability('2020-01-01', '12:00')

maria.addAvailability('2020-01-01', '12:00')
maria.addAvailability('2020-01-01', '19:00')

gonzalo.bookSession(maria, 'German', '2020-01-01', '12:00')
gonzalo.bookSession(maria, 'Spanish', '2020-01-01', '19:00')
gonzalo.bookSession(maria, 'German', '2020-01-02', '14:00')
gonzalo.bookSession(maria, 'Spanish', '2020-01-03', '16:00')

maria.bookSession(gonzalo, 'Spanish', '2020-01-10', '18:00')

maria.acceptInvitation(gonzalo.tandems[3])
//gonzalo.declineInvitation(maria.tandems[0])
//maria.cancelSession(gonzalo.tandems[3])

maria.rateUser(gonzalo, 4)
maria.rateUser(gonzalo, 5)
//gonzalo.rateUser(maria, 1)
//gonzalo.rateUser(maria, 4)
console.log(`maria has received ${maria.ratings.length} ratings`)
console.log('#'.repeat(50))
console.log(gonzalo.details)
console.log('#'.repeat(50))
console.log(maria.details)
console.log('#'.repeat(50))
const tandemSession = gonzalo.tandems
  .concat(maria.tandems)
  .find(
    tandem =>
      (tandem.user === gonzalo && tandem.partner === maria) || (tandem.user === maria && tandem.partner === gonzalo)
  )
console.log(tandemSession.details)

console.log('#'.repeat(50))
// console how many tandems maria has received
console.log(
  `Maria has ${maria.tandems.length} tandems. Which:
  -Received: ${maria.tandems.filter(tandem => tandem.partner === maria).length}
  -Sent: ${maria.tandems.filter(tandem => tandem.user === maria).length}
  -Not accepted yet: ${maria.pendingAcceptanceTandems.length}
  -Accepted: ${maria.tandems.filter(tandem => tandem.status === 'accepted').length}
  -Declined: ${maria.tandems.filter(tandem => tandem.status === 'declined').length}
  -List of rankings received: ${maria.ratings}`
)

// console tandems that maria has received and not accepted yet
//console.log(maria.pendingAcceptanceTandems)
