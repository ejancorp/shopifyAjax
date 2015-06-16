(function ($) {

    var endPoints = {
        list: {
            url: '/cart.js',
            method: 'get',
        },
        add: {
            url: '/cart/add.js',
            method: 'post',
        },
        remove: {
            url: '/cart/update.js',
            method: 'post',
        },
        update: {
            url: '/cart/update.js',
            method: 'post',
        },
        clear: {
            url: '/cart/update.js',
            method: 'post',
        },
    };

    var ajaxShop = function (args) {

        var _sh = this;

        this.shopOptions = {
            data: {},
            before: null,
            always: null,
            done: null,
            progress: null,
            error: null,
        };

        var settings = $.extend(_sh.shopOptions, args);

        this.methods = {

            listCart: function () {
                _sh.shopRequest(endPoints.list.url, endPoints.list.method, settings);
            },

            addCart: function () {
                _sh.shopRequest(endPoints.add.url, endPoints.add.method, settings);
            },

            removeCart: function () {
                _sh.shopRequest(endPoints.remove.url, endPoints.remove.method, settings);
            },

            updateCart: function () {
                _sh.shopRequest(endPoints.update.url, endPoints.update.method, settings);
            },

            clearCart: function () {
                _sh.shopRequest(endPoints.clear.url, endPoints.clear.method, settings);
            },
        };

        this.shopRequest = function (url, method, options) {

            var xhr = $.ajax({
                url: url,
                type: method,
                data: options.data,
                dataType: "json",
                error: function (data) {
                    if (typeof (_sh.shopOptions.error) === "function") {
                        _sh.shopOptions.error.call(_sh, data);
                    }
                },
                beforeSend: function (data) {
                    if (typeof (_sh.shopOptions.before) === "function") {
                        _sh.shopOptions.before.call(_sh, data);
                    }
                },
                complete: function (data) {
                    if (typeof (_sh.shopOptions.always) === "function") {
                        _sh.shopOptions.always.call(_sh, data);
                    }
                },
                success: function (data) {
                    if (typeof (_sh.shopOptions.done) === "function") {
                        _sh.shopOptions.done.call(_sh, data);
                    }
                }
            });

        };

    };

    $.shopifyAjax = function (method, args) {

        var p = new ajaxShop(args);

        if (typeof method !== 'undefined') {

            if (p.methods[method]) {
                return p.methods[method].apply();
            }
        }

        return p;

    };

}(jQuery));