require("dotenv").config();
const express = require("express");
const app = express();

const Twit = require("twit");
const request = require("request");
const fs = require("fs");
const path = require("path");

// this will check the keys and tokens saved in your .env file. you can get the keys/tokens from http://developer.twitter.com/en/apps
const bot = new Twit({
    consumer_key: process.env.PEXEL_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.BEARER_TOKEN,
    access_token_secret: process.env.API_TOKEN_SECRET,
    strictSSL: true
});

// homepage

app.get("/", function (req, res) {
    var responseText = `<HTML><body style="background-color:#f8cc07;"></body>" target="_blank"><img src="" alt="pexel Bot" style="width:px;height:400px;"></a></CENTER></HTML>`;
    res.send(responseText);
});

const os = require("os");
const tmpDir = os.tmpdir();

// this will call the Pexel API

const getPhoto = () => {
    const parameters = {
        url: "",
        qs: {
            api_key: process.env.PEXEL_KEY
        },
        encoding: "binary"
    };
    request.get(parameters, (err, respone, body) => {
        body = JSON.parse(body);
        saveFile(body);
    });
};

// the section below checks if this is a video or image. the Pexel API provides images and video URLs
// if it's an image, it will save to the temporary directory, and in the case it's a video, we will save the URL to the video

function saveFile(body) {
    const fileName =
        body.media_type.indexOf("image") != -1 ? "pexel.jpg" : "pexel.mp4";
    const filePath = path.join(tmpDir + `/${fileName}`);

    console.log(`saveFile: file PATH ${filePath}`);
    if (fileName === "pexel.mp4") {
        // tweet the link
        const params = {
            status: "Video time! 🍿 " + body.title + ": " + body.url
        };
        postStatus(params);
        return;
    }
    const file = fs.createWriteStream(filePath);

    request(body)
        .pipe(file)
        .on("close", err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Media saved!");
                const descriptionText = body.title;
                uploadMedia(descriptionText, filePath);
            }
        });
}

// the section below uploads the Pexel image to Twitter and returns a media ID

function uploadMedia(descriptionText, fileName) {
    console.log(`uploadMedia: file PATH ${fileName}`);
    bot.postMediaChunked({
            file_path: fileName
        },
        (err, data, respone) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                const params = {
                    status: descriptionText,
                    media_ids: data.media_id_string
                };
                postStatus(params);
            }
        }
    );
}

// the section below Tweets the media ID and sends a Tweet including the title

function postStatus(params) {
    bot.post("statuses/update", params, (err, data, respone) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Status posted on Twitter!!");
        }
    });
}

// below is setting the listening for incoming requests...
app.get(`/${process.env.BOT_ENDPOINT}`, function (req, res) {
    res.status(204).send();
    getPhoto();
});

// ... and this listens for requests! :)
const listener = app.listen(process.env.PORT, function () {
    console.log("🤖 is 👂🏽 on port " + listener.address().port);
});