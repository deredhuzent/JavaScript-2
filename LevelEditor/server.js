// Copyright (c) 2020 @deredhuzent, all rights reserved
'use strict'

import Express from 'express'
import Path from 'path'
import HTTP from 'http'
import FileSystem from 'fs'

const PORT = 3000;

class Server {

    constructor(){

        //create express
        this.api = Express();

        //configurate express
        this.api.use(Express.json())
                .use(Express.urlencoded({ extended: false }))
                .use(Express.static( Path.join( __dirname, '.')));
            
        this.api.get('/', (req, res) => {
            res.render('index', {title: 'Angry pigs editor! Oink!'})
        });

        this.api.post('/api', (req, res) => {

            let result = { error: -1};

            //handle edges from form
            let params = request.params; // data in url -->> /api/:name/:id
            let query = request.query; // data in PHP -->> param String
            let data = request.body; // data as JSON data

            let action = request.body.action;
            switch(action){

                case 'Validate':
                    result.error= 0;
                    break;

                case 'Submit':
                    result.error = 0;
                    break;
                
                default:
                    result = {error: -2, ...req.body}
                    break;
            }

            //send the result back as JSON data

            let JSONString = JSON.stringify( result);
            res.send(JSONString)
        })

        this.run();
    }

    run() {

        this.api.set('port', PORT);
        this.listener = HTTP.createServer(this.api);
        this.listener.listen(PORT);
        this.listener.on('listening', event => {

            let addr = this.listener.address();
            let bind = typeof addr == `string` ? `pipe ${addr}`: `port ${addr.port}`;

            console.log(`Listening on ${bind}`)
        });
    }
}

const server = new Server();