import * as fsp from "fs-promise";
import * as fs from "fs";
import * as path from "path";

import { map, behavior } from "./settings.config";


function readdir(dir:string){
    return new Promise((resolve, reject)=>{
        fs.readdir(dir,(err,data)=>{
            if(err){
                resolve(false)
            }
            else{
                resolve( data.map(file=>{
                    return Object.assign( 
                        path.parse(file), 
                        {
                            dir:dir,
                            fullpath: path.join( dir, file),
                            data:()=>{
                                return safeJson(path.join( dir, file))
                            }
                        } );
                }) )
            }
        })
    })
}

function safeJson(data:string){
    return new Promise((resolve,reject)=>{
        try{
            resolve({
                data:JSON.parse(data),
                valid:true
            });
        }
        catch(err){
            resolve({
                data:data,
                valid:false
            });
        }
    })
}


function deepLoop(target:Target){
    
}


console.log(`
Mode:`)
console.log(`input: ${behavior.input}`)
console.log(`output: ${behavior.output}
`)


interface Target{
    /**
     * For logging, provides the file name
    */
    filename:string|boolean,
    /**
     * Expects json data
    */
    data:any|boolean;
}


if(behavior.input === "file"){
    
}
else if(behavior.output === "stream"){
    //TODO
    //const data = fs.readdirSync( map.in );
}