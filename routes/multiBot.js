var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

    let channelAccessToken = ""
    let msg = ""

    switch (req.body.desctination){
        case "":
            msg = ""
            channelAccessToken = ""
            break
        case "":
            msg = ""
            channelAccessToken = ""
            break
    }

    console.log("msg: " + msg)
    console.log("token: " + channelAccessToken)
    console.log("req: " + req)

    // reply(
    //     channelAccessToken,
    //     req.body.events[0].replyToken,
    //     { type: "text", text: msg }
    // )


    res.json({requestBody: req.body})  
    // res.send('<b> Posted to API</b>');
    // return null

});

const reply = (channelAccessToken, replyToken, payload) => {
    request.post({
        uri: "https://api.line.me/v2/bot/message/reply",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${channelAccessToken}`
        },
        body: JSON.stringify({
            replyToken: replyToken,
            messages: [payload]
        })
    })
}


module.exports = router;