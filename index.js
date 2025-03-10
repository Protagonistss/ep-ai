const Jimp = require('jimp')

const blurImage = (input, output, r) => {
  Jimp.read(input).then(image => {
    image.blur(r)
    image.write(output)
  }).catch(err => {
    console.error(err)
  })
}
blurImage('./dataSet/images/1.jpeg', 'output.jpeg', 10)