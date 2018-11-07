const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
const fs = require('fs')

//var info = autoprefixer().info();
//console.log(info);

const a = (css) => {
    console.log(css);
    return css;
}

fs.readFile('./style.css', (err, css) => {
  postcss([precss, autoprefixer, a])
    .process(css, { from: './style.css', to: './app.css' })
    .then(result => {
      fs.writeFile('./app.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('./app.css.map', result.map, () => true)
      }
    })
})
