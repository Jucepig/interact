const router = require('express').Router();
const { Tweets, Users } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbTweetsData = await Tweets.findAll({
      include: [
        {
          model: Users,
          attributes: ['username', 'email', 'password'],
        },
      ],
    });

    const galleries = dbTweetsData.map((tweets) =>
      tweets.get({ plain: true })
    );

    res.render('homepage', {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one tweets
router.get('/tweets/:id', async (req, res) => {
  try {
    const dbTweetsData = await Tweets.findAll( {
      include: [
        {
          model: Users,
          attributes: [
            'username',
            'email',
            'password',
          ],
        },
      ],
      where: {users_id: req.params.id}
    });

    const tweets = dbTweetsData.map(el=>el.get({plain:true}))
    console.log(tweets)
    res.render('tweets', { tweets });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one users
router.get('/users/:id', async (req, res) => {
  try {
    const dbUsersData = await Users.findByPk(req.params.id);

    const users = dbUsersData.get({ plain: true });

    res.render('users', { users });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
