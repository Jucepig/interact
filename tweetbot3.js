var Twit = require('twit');
var request = require('request');
var fs = require('fs');

var bot = new Twit({
    pexel_key: process.env.PEXEL_KEY,
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000 
});

var stream = bot.stream('statuses/filter', {track: 'pexel_key'});

stream.on('tweet', function(tweet){
    console.log(tweet.text+'\n ');  // NEED TO ADD INFO HERE-- I PULLED ALL THIS CODE FROM THE top 2 RESOURCES POSTED AND PUT IT TOGETHER. CHECK THERE FOR REFFERENCE
});

function getPhoto(){               //  ??? GET PHOTO FUNCTION NOT ACTIVE HERE NOT SURE IF IT's SUPPOSED TO BE LIKE THAT??
    var parameters = {
        url: 'https://www.pexels.com',
        qs: {
            pexel_key: process.env.PEXEL_KEY
        },
        encoding: 'binary'
    };
    request.get(parameters, function(err, response, body){
        body = JSON.parse(body);
        saveFile(body, 'pexel.jpg');
    });
}


function saveFile(body, fileName){
    var file = fs.createWriteStream(fileName);
    request(body).pipe(file).on('close', function(err){
        if (err){
            console.log(err);
        }else{
            console.log('Media saved.');
            var descriptionText = body.title;
            uploadMedia(descriptionText, fileName);
        }
    })
}


function uploadMedia(descriptionText, fileName){
    var filePath = __dirname + '/' + fileName;
    bot.postMediaChunked({file_path: filePath}, function(err, data, response){
        if (err){
            console.log(err);
        }else{
            console.log(data);
            var params = {
                status: descriptionText,
                media_ids: data.media_id_string
            };
            postStatus(params);
        }
    });
}


function postStatus(params){
    bot.post('statuses/update', params, function(err, data, response){
        if (err){
            console.log(err);
        }else{
            console.log('Status posted.');
        }
    });
}


uploadMedia('Video from pexel', 'pexel_video.mp4');