var assert= require('chai').assert

module.exports= function (Assets) {
    return function () {

        it('should be a function', function () {
            assert.isFunction(
                Assets
            )
        })

        it('return instance of self', function () {
            assert.instanceOf(
                Assets(), Assets
            )
        })

        it('exports Css tech', function () {
            assert.isFunction(
                Assets.Css
            )
            describe('Css tech', function () {
                it('exports File model', function () {
                    assert.isFunction(
                        Assets.Css.File
                    )
                })
                it('exports Folder model', function () {
                    assert.isFunction(
                        Assets.Css.Folder
                    )
                })
            })
            describe('Css tech constructor', function () {
                describe('Css tech constructor for path', function () {
                    it('return Assets.Css.Folder instance', function () {
                        assert.instanceOf(
                            Assets.Css('assets/css/', {}), Assets.Css.Folder
                        )
                        assert.instanceOf(
                            Assets.Css('assets/css', {}), Assets.Css.Folder
                        )
                    })
                })
                describe('Css tech constructor for path to file', function () {
                    it('return Assets.Css.File instance', function () {
                        assert.instanceOf(
                            Assets.Css('assets/css/style.css', {}), Assets.Css.File
                        )
                    })
                })
                describe('Css tech instance', function () {
                    it('has .make method', function () {
                        assert.isFunction(
                            Assets.Css('assets/css/', {}).make
                        )
                        assert.isFunction(
                            Assets.Css('assets/css/style.css', {}).make
                        )
                    })
                })
            })
        })

        it('exports Js tech', function () {
            assert.isFunction(
                Assets.Js
            )
            describe('Js tech', function () {
                it('exports File model', function () {
                    assert.isFunction(
                        Assets.Js.File
                    )
                })
                it('exports Folder model', function () {
                    assert.isFunction(
                        Assets.Js.Folder
                    )
                })
            })
            describe('Js tech constructor', function () {
                describe('Js tech constructor for path', function () {
                    it('return Assets.Js.Folder instance', function () {
                        assert.instanceOf(
                            Assets.Js('assets/js/', {}), Assets.Js.Folder
                        )
                        assert.instanceOf(
                            Assets.Js('assets/js', {}), Assets.Js.Folder
                        )
                    })
                })
                describe('Js tech constructor for path to file', function () {
                    it('return Assets.Js.File instance', function () {
                        assert.instanceOf(
                            Assets.Js('assets/js/script.js', {}), Assets.Js.File
                        )
                    })
                })
            })
            describe('Js tech instance', function () {
                it('has .make method', function () {
                    assert.isFunction(
                        Assets.Js('assets/js/', {}).make
                    )
                    assert.isFunction(
                        Assets.Js('assets/js/script.js', {}).make
                    )
                })
            })
        })

    }
}