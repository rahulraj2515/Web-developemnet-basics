 var http = require('http');

 var events = require('events');

 var eventEmitter =  new events.EventEmitter();

 var server = http.createServer(function (req,res) {
    eventEmitter.emit('someone requested','Task');  // event trigger
      res.end('server works');
 });

 eventEmitter.on('someone requested', (data)=>{
    console.log('A request has been done !!!  ',data);
 });     // event listener

 server.listen(3000,'localhost',() =>{
    console.log('server started on 3000');
 })



 /* ______________________________Events Module_______________________________________________
         Import Events module
            var my_Events = require('events');

         Create an event emitter object
            var EveEmitter = new events.EventEmitter();

         Binding an event and event handler
            EveEmitter.on('eventname', EventHandler);
         Fire an event

            EveEmitter.emit('eventname');
*/

/*______________________________Creating a  Web server using nodeJS_____________________________

         calling http library
            var http = require('http');
            var url = require('url');
         
         Creating Server   
            var server = http.createServer(function (req,res){
               // setting content header
                  res.writeHead(200, ('content-Type', 'text/html'));
                  var q = url.parse(req.url, true).query;
                  var txt = q.year +'' +q.month;
                  // send string to response
                     res.end(txt);
            });

            // assigning 8080 as server listening port
               server.listen(8080);
               
*/
