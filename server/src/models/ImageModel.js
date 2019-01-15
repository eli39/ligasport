const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
  id_foreign: String,
  type: Number,
  image: Buffer,
  status: Number,
  created: { type: 'Date', default: Date.now },
  modified: { type: 'Date', default: Date.now }
})

const Image = mongoose.model('Images', imageSchema)

exports.createImageModel = (imageUser) => {
  const image = new Image(imageUser)
  return image.save()
}

exports.findByIdForeignImageModel = (idForeign) => {
  return Image.find({
    id_foreign: idForeign,
    status: 1
  })
}

exports.findByIdImageModel = (imageId) => {
  return Image.findById(imageId)
  .then((result) => {
    result = JSON.stringify(result)
    return JSON.parse(result)
  })
}
