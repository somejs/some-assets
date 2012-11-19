var fs= require('fs')
  , less= require('less')



var File= module.exports= function (target, options) {

    if (!(this instanceof File)) {
        return new File(target, options)
    }

    Object.defineProperty(this, 'make', {
        value: function (callback) {

            var parser= new less.Parser
            fs.readFile(options.path, 'utf8', function (err, data) {
                if (err) throw err
                parser.parse(data, function (e, tree) {
                    fs.writeFile(target, tree.toCSS({ compress: true }), function (err) {
                        if (err) throw err
                        console.log(target, 'собран :)')
                        callback(err, target)
                    })
                })
            })
            return this
        }
    })
}