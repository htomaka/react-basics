/**
 * Created by htomaka on 16/10/16.
 */
var Hapi = require ('hapi');
var server = new Hapi.Server ();

server.connection ({
    port: 8080,
    routes: {
        cors: true
    }
});

server.route ({
    method: 'GET',
    path: '/profiles',
    handler: function ( request, reply ) {
        var profiles = [
            {
                id: 0,
                name: 'David',
                age: 40,
                hobbies: ['programming', 'drawing'],
                bio: 'enjoys drawing and programming'
            },
            {
                id: 1,
                name: 'Sarah',
                age: 23,
                hobbies: ['swimming', 'shopping'],
                bio: 'enjoys swimming and shopping'
            }
        ];
        reply (profiles);
    }
});

server.start(function(err) {
    if (err) {
        throw err;
    }
    console.log('Server running at: ' +  server.info.uri);
});