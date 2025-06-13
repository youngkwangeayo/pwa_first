const Log = new class {

    #origin;
    constructor() {

        try {
            if (typeof self !== "undefined" && self instanceof ServiceWorkerGlobalScope) this.#origin = "sw";
            else this.#origin = "bw";
        } catch (error) {
            this.#origin = "bw";
        };

        console.log(this.#origin);
    };



    debug(...args) {
        console.log("[debug] ", ...args);
    };

    info(...args) {
        console.log("[debug] ", ...args);

        // if (this.#instance ) {
        //     callSwLog()  //console.log( ...args ); 등등처리
        // }else{
        //     callBwlog() //console.log( ...args ); 등등처리
        // }
    };
    error (...args) {
        console.log("[debug] ", ...args);

        // if (this.#instance ) {
        //     callSwLog()  //console.log( ...args ); 등등처리
        // }else{
        //     callBwlog() //console.log( ...args ); 등등처리
        // }
    };


}