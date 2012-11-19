var Assets= module.parent.exports
  , Fs= require('some-fs')



var Js= module.exports= function (path, options) {
    
    this.path= (path instanceof Fs.Path) ? path : new Fs.Path(path)
    this.options= options || Js.options

    if (this.path.isFolder()) {
        return new Js.Folder(path, options)
    }
    return new Js.File(path, options)
}
Js.options= {

}

Js.File= require('./File')

Js.Folder= require('./Folder')