// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

const timer = {
    setTimeout: function (cb, duration) {
        return setTimeout(cb, duration);
    },
    clearTimeout: function (handle) {
        return clearTimeout(handle);
    }
};

let testing = false;

export default class Global {

    static _testing() {
        testing = true;
    }

    static get location() {
        if (!testing) {
            return location;
        }
    }
    static get localStorage() {
        if (!testing) {
            return localStorage;
        }
    }
    static get sessionStorage() {
        if (!testing) {
            return sessionStorage;
        }
    }
    static get XMLHttpRequest() {
        if (!testing) {
            return XMLHttpRequest;
        }
    }
    static get timer() {
        if (!testing) {
            return timer;
        }
    }
};
