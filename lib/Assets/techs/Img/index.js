var Assets= module.parent.exports
  , Fs= require('some-fs')


var Img= module.exports= function (path, options) {

    this.path= (path instanceof Fs.Path) ? path : new Fs.Path(path)
    this.options= options || Img.options

    /*if (this.path.isFolder()) {
        return new Img.Folder(path, options)
    }*/
    return new Img.Folder(path, options)
}
Img.options= {

}

Img.Folder= require('./Folder')
