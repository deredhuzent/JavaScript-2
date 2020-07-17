// Copyright (C) 2020 Scott Henshaw
'use strict';

import App from './appScott.js';

// Main
(function Main() {

    // makes sure all HTML and CSS is loaded
    $(document).ready( event => {

        let app = new App();
        app.run();
    })
})()




