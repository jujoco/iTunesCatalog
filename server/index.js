const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'));

app.get('/search/:term', (req, res) => {
  const term = req.params.term;
  request(`https://itunes.apple.com/search?term=${term}`, (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      const data = JSON.parse(body);
      const catalog = {};
      for (let obj of data.results) {
        if (obj.wrapperType === 'track') {
          let val = reducer(obj);
          if (!catalog[obj.kind]) catalog[obj.kind] = [val];
          else catalog[obj.kind].push(val);
        }
      }
      res.send(catalog);
    }
  })
});

function reducer(obj) {
  const { trackId, trackName, artworkUrl60, primaryGenreName, trackViewUrl } = obj;

  let newObj = {
    id: trackId,
    name: trackName,
    artwork: artworkUrl60,
    genre: primaryGenreName,
    url: trackViewUrl,
  };

  return newObj;
}

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
