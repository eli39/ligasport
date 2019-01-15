const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leagueSchema = new Schema({
  image: Buffer,
  name: String,
  created: { type: 'Date', default: Date.now },
  modified: { type: 'Date', default: Date.now },
  status: Number,
  id_level: String,
  id_admin: String
})

const League = mongoose.model('Leagues', leagueSchema)

exports.createLeagueModel = (dataLeague) => {
  const league = new League(dataLeague)
  return league.save()
}

exports.findByIdLeagueModel = (leagueId) => {
  return League.findById(leagueId)
  .then((result) => {
    result = JSON.stringify(result)
    return JSON.parse(result)
  })
}

exports.findAllLeagueModel = () => {
  return League.find()
  .then((result) => {
    result = JSON.stringify(result)
    return JSON.parse(result)
  })
}

exports.findAllLeaguesByIdAdminModel = (id_admin) => {
  console.log(id_admin)
  return League.find({id_admin:id_admin})
  .then((result) => {
    result = JSON.stringify(result)
    return JSON.parse(result)
  })
}
