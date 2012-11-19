var Fs= require('some-fs')



var Folder= module.exports= function (target, options) {

    if (!(this instanceof Folder)) {
        return new Folder(target, options)
    }

    Object.defineProperty(this, 'make', {
        value: function (callback) {
            if (!options.paths) {
                options.paths= []
                if (options.path) {
                    options.paths.push(path)
                }
            }
            options.paths.map(function (source) {
                Fs(source, '*.css', function (err, files) {
                    Object.keys(files).map(function (path) {
                        files[path].copy(target + path, function (err, file) {
                            console.log(file.path, 'собран :)')
                            callback(err, target)
                        })
                    })
                })
            })
            return this
        }
    })
}