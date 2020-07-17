// Copyright (C) 2020 deredhzuent & Scott Henshaw, all rights reserved
'use strict'

//control user interface
export default class App{

    constructor(){
        //TODO: initialize lvl data
        //TODO: fetch list of library things
        //TODO: this.loadLibrary();
        let $libraryListEls = $(".obstacle"); //create jquery list library, grabbing by class

        //attach draggable handlers to each el
        this.addDraggHandlers($libraryListEls);

        //TODO: fecth list of existins lvls
        this.addDroppableHandlers();

        //TODO: fill library
        //TODO: create new lvl/load existing lvl

        // event handlers (Btns)
        $('newLvlBtn').on('click', event => this.createLevel(event));
        $('saveLvlBtn').on('click', event => this.saveLevel(event));
        $('loadLvlBtn').on('click', event => this.loadLevel(event));
        //$('loadLvlBtn').on('change', event => this.loadFile(event)); dropdown list
        $('deleteObjBtn').on('click', event => this.deleteObj(event));
        $('editObjBtn').on('click', event => this.editObject(event));
        $('addObjBtn').on('click', event => this.addObj(event));
    }

    addDraggHandlers($elementList){

        $elementList.on("dragStart", event => {
            //collect drag info, delta from top left,el id
        })
        .on("drag", event =>{
            //debbug stuff
        })
        .on("dragEnd", event =>{
            //change look
        })
    } 

    addDroppableHandlers(){
        $('') //5:40 https://www.youtube.com/watch?time_continue=1&v=_1ZzLODjVMM
    }

    createLevel(event){
        //TODO: create level
    }

    loadLevel(event){
        //TODO: load Level with file name
    }

    saveLevel(event){
        //TODO: 
        event.preventDefault();

       let lvlData = this.gatherFormData(event);

       //TODO: post msg to server
       $.post('/api/save-lvl', lvlData)
           .then(responseData => {
   
               //deal with response
               let newData = JSON.parse(responseData);

               //TODO: pop msg -->> success
   
           })
           .catch(error => 
            //TODO: pop msg -->> fail
            console.log(error));
    }

    gatherFormData(event){
        //TODO: gather data and send off to server
        
        let baseData = $('lvlInfo').serializeArray(); //<<-- gives me an arr of objects
        
        /*
        serializeArray gives:
        let deleteMe = [{ name:"name", value:"level-1" },
                        { name:"obstacleCount", value: "10" },
                        {}, ...];

        transform to:
        let levelData = {
            name: "level-1",
            obstacleCount: 10,
            ...
        };
        */

        let lvlData = {}; //create empty obj
        for(let field of baseData){

            //create new lvl data (obj attributes)
            lvlData[field.name] = field.value;
        }

        //TODO: add data of the actual level - lvl editor section

        return lvlData;
    }


    run(){

    }
}