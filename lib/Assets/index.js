var Fs= require('some-fs')

  , reduce= require('async').reduce



/**
 * Модель статических ресурсов приложения
 */
var Assets= module.exports= function (path, options, assets) {

    if (!(this instanceof Assets)) {
        return new Assets(path, options, assets)
    }

    if (!(path instanceof Fs.Path)) {
        path= Fs.Path(path)
    }

    this.options= {}
    options && Object.keys(options).map(function (k) {
        if (Assets.options[k]) {
            this.options[k]= options[k] || Assets.options[k]
        }
    }, this)

    this.assets= {}
    assets && Object.keys(assets).map(function (k) {
        this.assets[k]= assets[k]
    }, this)

}
Assets.options= {
    path: 'src/assets'
}

/**
 * Собирает ресурсы
 */
Assets.prototype.make= function(callback) {
    reduce(Object.keys(this.assets), this.assets, function (assets, key, callback) {
        console.log('собрать «', key, '»')
        assets[key] && assets[key].make(function (err, target) {
            callback(err, assets)
        })
    }, callback)
}


/**
 * Модель CSS-ресурсов
 */
Assets.Css= require('./techs/Css')

/**
 * Модель JS-ресурсов
 */
Assets.Js= require('./techs/Js')


//IMG ресурсы
Assets.Img= require('./techs/Js')
