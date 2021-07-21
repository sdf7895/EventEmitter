const express = require('express')
const EventEmitter = require('events').EventEmitter
const fs = require('fs')
const app = express()

app.get('/', (req, res) => {
    const findPatternObject = new FindPattern(/hello\w+/);
    findPatternObject
      .addFile('fileA.txt')
      .addFile('fileB.json')
      .find()
      .on('found', (file,match) => console.log(`Matched ${match} in file ${file}`))
      .on('error', err => console.log(`Error emitted ${err.message}`))
})

class FindPattern extends EventEmitter {
  constructor(regex){
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file){
    this.files.push(file);
    return this;
  }

  find(){
    this.files.forEach( file => {
      fs.readFile(file, 'utf8', (err, content) => {
        if (err){
          return this.emit('error', err);
        }

        this.emit('fileread', file);

        let match =null;
        if (match = content.match(this.regex)) {
          match.forEach(elem => this.emit('found', file, elem));
        }
      });
    });
    return this;
  }
}


app.listen(5000)