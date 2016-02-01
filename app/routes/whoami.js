module.exports = function (app){
    app.get('/whoami',function(req,res){
        res.json(parseRequest(req));
    })
}

function parseRequest(req){
    var headers = req.headers;
    var response = {
        ipaddress : headers['x-forwarded-for'],
        language  : headers['accept-language'].split(',')[0],
        software  : headers['user-agent'].match(/(\(.*?\))/g)[0].replace(/[\(\)]/g,'')  
        //hate the split hack, but couldn't find any other way to do it
    };
    
    return response;
}