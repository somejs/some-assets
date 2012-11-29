var fs= require('fs')
  , exec= require('child_process').exec

  , basename= require('path').basename
  , resolve= require('path').resolve



var File= module.exports= function (target, options) {

    if (!(this instanceof File)) {
        return new File(target, options)
    }

    Object.defineProperty(this, 'make', {
        value: function (callback) {

            var command= 'lessc ' +options.path +' > '+ target
            console.log(
                command, resolve(target)
            )
            lessc= exec(command)
                lessc.stdout.pipe(process.stdout)
                lessc.stderr.pipe(process.stdout)
                lessc.on('exit', function (status) {
                    console.log(target, status, 'собран :)')
                    callback(status, target)
                })
            //var parser= new(less.Parser)(options && options.options || {
            //    paths: ['.'],
            //    filename: basename(target)
            //})
            //console.log(parser)
            //fs.readFile(options.path, 'utf8', function (err, data) {
            //    if (err) {
            //        return callback(e, target)
            //    }
            //    parser.parse(data, function (err, tree) {
            //        if (err) {
            //            return callback(e, target)
            //        }
            //        fs.writeFile(target, tree.toCSS({ compress: true }), function (err) {
            //            if (err) {
            //                console.log('ПИЗДОС', err)
            //            }
            //            console.log(target, 'собран :)')
            //            callback(err, target)
            //        })
            //    })
            //})
            //return this
        }
    })
}