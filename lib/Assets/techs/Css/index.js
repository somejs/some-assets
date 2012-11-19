var Assets= module.parent.exports
  , Fs= require('some-fs')


var Css= module.exports= function (path, options) {

    this.path= (path instanceof Fs.Path) ? path : new Fs.Path(path)
    this.options= options || Css.options

    if (this.path.isFolder()) {
        return new Css.Folder(path, options)
    }
    return new Css.File(path, options)
}
Css.options= {

}

Css.File= require('./File')

Css.Folder= require('./Folder')