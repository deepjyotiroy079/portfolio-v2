var express = require("express");
var sendMail = require('./mail');



var router = express.Router();


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("contact");
});

router.post("/send", (req, res) => {
    const { name, email, subject, message } = req.body;
    // console.log('Data : ' + req.body);

    sendMail(name, email, subject, message, (err, data)=>{
        if(err) {
            console.log(err); // TODO: Getting Timeout for getting mails
        } else {
            res.status({ message: 'Message sent!!!' });
        }
    })
});
module.exports = router;
