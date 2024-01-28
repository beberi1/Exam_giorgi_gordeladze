const express = require('express'); 
const app = express();
const fs = require('fs'); 
const bodyParser = require('body-parser');


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // მისამართი ჩაჰარდკოდებულია არ არის გამოყენებული .env
    app.use('/datai', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
  };

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.use(bodyParser.json());


app.get('/datai', function(req, res){
    fs.readFile("db/data.json", 'utf8', function(err, data){
        console.log(data);
        res.send(data); 
    });
})

// upgrade-ს დამატება
app.post('/addUpgrade', function(req, res) {
  const newUpgrade = req.body;

  fs.readFile("db/data.json", 'utf8', function(err, data) {
      if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
          return;
      }
      let existingData;
      try {
          existingData = JSON.parse(data);
      } catch (parseError) {
          console.error(parseError);
          res.status(500).send('Error parsing existing data in data.json');
          return;
      }



      existingData.upgrades.push(newUpgrade);

      fs.writeFile("db/data.json", JSON.stringify(existingData, null, 2), 'utf8', function(err) {
          if (err) {
              console.error(err);
              res.status(500).send('Internal Server Error');
              return;
          }

          console.log('Upgrade added successfully:', newUpgrade);
          res.status(201).json({ success: true, message: 'Upgrade added successfully.' });
      });
  });
});

// score-ს განახლება
app.post('/updateScore', function(req, res) {
  const newScore = req.body.score;

  fs.readFile("db/data.json", 'utf8', function(err, data) {
      if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
          return;
      }

      try {
          existingData = JSON.parse(data);
      } catch (parseError) {
          console.error(parseError);
          res.status(500).send('Error parsing existing data in data.json');
          return;
      }

      existingData.score = newScore;

      fs.writeFile("db/data.json", JSON.stringify(existingData, null, 2), 'utf8', function(err) {
          if (err) {
              console.error(err);
              res.status(500).send('Internal Server Error');
              return;
          }

          console.log('Score updated successfully:', newScore);
          res.status(200).json({ success: true, message: 'Score updated successfully.' });
      });
  });
});

//upgrade-ს განახლება
app.post('/updateUpgrade', function(req, res) {
  const updatedUpgrade = req.body;
  const upgradeNameToUpdate = updatedUpgrade.name;

  fs.readFile("db/data.json", 'utf8', function(err, data) {
      if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
          return;
      }

      let existingData;
      try {
          existingData = JSON.parse(data);
      } catch (parseError) {
          console.error(parseError);
          res.status(500).send('Error parsing existing data in data.json');
          return;
      }


      // Find the index of the upgrade with the specified name
      const indexToUpdate = existingData.upgrades.findIndex(upgrade => upgrade.name === upgradeNameToUpdate);

      if (indexToUpdate !== -1) {
          // Update the upgrade if found
          existingData.upgrades[indexToUpdate] = updatedUpgrade;

          fs.writeFile("db/data.json", JSON.stringify(existingData, null, 2), 'utf8', function(err) {
              if (err) {
                  console.error(err);
                  res.status(500).send('Internal Server Error');
                  return;
              }

              console.log(`Upgrade '${upgradeNameToUpdate}' updated successfully:`, updatedUpgrade);
              res.status(200).json({ success: true, message: `Upgrade '${upgradeNameToUpdate}' updated successfully.` });
          });
      } else {
          // If the upgrade with the specified name is not found
          res.status(404).json({ success: false, message: `Upgrade '${upgradeNameToUpdate}' not found.` });
      }
  });
});


const server = app.listen(3003, function(){
  const host = server.address().address
  const port = server.address().port
    console.log(`REST API usmens  http://localhost:${port}`)
})