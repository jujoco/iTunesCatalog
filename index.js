require('dotenv').config();
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const cors = require('cors');
const aws = require('aws-sdk');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'));


const S3_BUCKET = process.env.AWS_BUCKET_NAME
aws.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
})

app.post('/sign_s3', (req, res) => {
  const s3 = new aws.S3();  // Create a new instance of S3
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;

  // Set up the payload of what we are sending to the S3 api
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 120,
    ContentType: fileType,
    ACL: 'public-read'
  };

  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err })
    }

    // Data payload of what we are sending back,
    // the url of the signedRequest and a URL
    // where we can access the content after its saved.
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };

    res.json(returnData);
  });
});


app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
