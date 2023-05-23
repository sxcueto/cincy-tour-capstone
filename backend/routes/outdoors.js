const router = require('express').Router();
let Outdoors = require('../models/art/outdoors.model')

router.route('/').get((req, res) => {
    Outdoors.find()
        .then(arts => res.json(arts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name
    const description = req.body.description
    const imgUrl = req.body.imgUrl;
    const address = req.body.address;
    const website = req.body.website

    const newOutdoors = new Outdoors ({
        name,
        description,
        imgUrl,
        address,
        website
    });

    newOutdoors.save()
        .then(() => res.json('Attraction added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req,res) => {
    Outdoors.findByIdAndDelete(req.params.id)
        .then(() => res.json('Attraction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    Outdoors.findById(req.params.id)
    .then(outdoors => {
      outdoors.name = req.body.name;
      outdoors.description = req.body.description;
      outdoors.imgUrl= req.body.imgUrl
      outdoors.address = req.body.address;

      exercise.save()
        .then(() => res.json('Attraction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;
