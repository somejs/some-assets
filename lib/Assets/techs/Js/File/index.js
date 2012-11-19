var Fs= require('some-fs')

  , reduce= require('async').reduce
  , join= require('path').join



var File= module.exports= function (target, options) {

    if (!(this instanceof File)) {
        return new File(target, options)
    }

    Object.defineProperty(this, 'make', {
        value: function (callback) {

            Fs.File(target).save(function (err, file) {
                reduce(options.paths, file, function (target, path, callback) {

                    Fs.File(join(options.basepath, path)).readStream().pipe(
                        target.appendStream()
                    ).on('close', function (err) {
                        callback(err, target)
                    })

                }, callback)
            })

        }
    })
}