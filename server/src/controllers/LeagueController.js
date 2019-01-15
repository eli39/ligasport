const fs   = require('fs')
const LeagueModel = require('../models/LeagueModel')

exports.createLeagueController = (req, res) => {
  const body= ({
    image: fs.readFileSync(req.file.path),
    name: req.body.name,
    status: 1,
    id_level: req.body.id_level,
    id_admin: req.body.id_admin
  })
  LeagueModel.createLeagueModel(body)
  .then((result) => {
    console.log(result)
    res.status(200).json({
      message: "Created league successfully",
      league: {
        _id: result._id
      }
    })
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({
      result: err,
      code: 400
    })
  })
}

exports.findByIdLeagueController = (req, res) => {
  LeagueModel.findByIdLeagueModel(req.params.leagueId)
  .then((result) => {
    if (result) {
      res.status(200).json(result)
    } else {
      res
      .status(404)
      .json({
        message: "No valid entry found for provided ID"
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
}

exports.findAllLeagueController = (req, res) => {
  LeagueModel.findAllLeagueModel()
  .then(docs => {
    const response = {
      count: docs.length,
      leagues: docs.map(doc => {
        return {
          _id: doc._id,
          image: doc.image,
          name: doc.name,
          created: doc.created,
          modified: doc.modified,
          status: doc.status,
          id_admin: doc.id_admin,
          id_level: doc.id_level
        }
      })
    }
    if (docs.length > 0) {
      res.status(200).json(response)
    } else {
      res.status(404).json({
        message: 'No entries found'
    })
    }
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}

exports.findAllLeaguesByIdAdminController = (req, res) => {
  LeagueModel.findAllLeaguesByIdAdminModel(req.params.id_admin)
  .then(docs => {
    const response = {
      count: docs.length,
      leagues: docs.map(doc => {
        return {
          _id: doc._id,
          name: doc.name,
          created: doc.created,
          modified: doc.modified,
          status: doc.status,
          id_admin: doc.id_admin,
          id_level: doc.id_level
        }
      })
    }
    if (docs.length > 0) {
      res.status(200).json(response)
    } else {
      res.status(404).json({
        message: 'No entries found'
    })
    }
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}
