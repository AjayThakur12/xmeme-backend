const express = require('express');
const router = express.Router();

const XmemeController = require('../Controllers/Xmeme.Controller');

//Get a list of latest 100 meme's 
router.get('/', XmemeController.getLatest100Memes);

//Create a new meme
router.post('/', XmemeController.createNewMeme);

module.exports = router;