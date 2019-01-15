const fs   = require('fs')
const ImageModel = require('../models/ImageModel')

  exports.createImageController = (req, res) => {

    const body= ({
        id_foreign: req.body.id_foreign,
        type: req.body.type,
        image: fs.readFileSync(req.file.path),
        status: req.body.status
    })

    ImageModel.createImageModel(body)
    .then((result) => {
      console.log(result)
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        result: err,
        code: 400
      })
    })

  }

  exports.findByIdForeignImageController = (req, res) => {
    ImageModel.findByIdForeignImageModel(req.params.foreignId)
    .then((result) => {
      if (result) {
        res.status(200).json(result)
      } else {
        res.status(404).json({
          message: "No valid entry found for provided ID"
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  }

  exports.findByIdImageController = (req, res) => {
    ImageModel.findByIdImageModel(req.params.imageId)
    .then((result) => {
      if (result) {
        res.status(200).json(result)
      } else {
        res.status(404).json({
          message: "No valid entry found for provided ID"
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  }
