import Crop from "../model/cropmodel.js"
import MarketData from "../model/marketinfomodel.js";

// Create a new crop
export const addcrops=async(req,res,next)=>{
  const { name,price } = req.body;

  Crop.findOne({ name })
    .then((existingCrop) => {
      if (existingCrop) {
        // Crop already exists, reuse the existing crop ID
        const newMarketData = new MarketData({
          crop: existingCrop._id,
          date: new Date(),
          price: price, // Replace with the actual price
        });

        newMarketData.save()
          .then(() => {
            console.log('Market data saved successfully');
            res.sendStatus(200);
          })
          .catch((error) => {
            console.error('Error saving market data:', error);
            res.sendStatus(500);
          });
      } else {
        // Crop does not exist, create a new crop entry
        const newCrop = new Crop({
          name,
        });

        newCrop.save()
          .then((crop) => {
            const newMarketData = new MarketData({
              crop: crop._id,
              date: new Date(),
              price: 10.5, // Replace with the actual price
            });

            newMarketData.save()
              .then(() => {
                console.log('Market data saved successfully');
                res.sendStatus(200);
              })
              .catch((error) => {
                console.error('Error saving market data:', error);
                res.sendStatus(500);
              });
          })
          .catch((error) => {
            console.error('Error saving crop:', error);
            res.sendStatus(500);
          });
      }
    })
    .catch((error) => {
      console.error('Error finding crop:', error);
      res.sendStatus(500);
    });
};



// Retrieve crop data for a specific crop name within a one-month period
///crop-data/:cropName'
export const getcrops=async(req,res,next)=>{
    const { cropName } = req.params;
  console.log(cropName)
    // Calculate the start and end dates
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
  
    Crop.findOne({ name: cropName })
      .then((crop) => {
        if (!crop) {
            console.log("m")
          res.status(404).json({ error: 'Crop not found' });
          return;
        }
  
        MarketData.find({
          crop: crop._id,
          date: { $gte: startDate, $lte: endDate },
        })
          .then((cropData) => {
            res.json(cropData);
          })
          .catch((error) => {
            console.log("n")
            console.error('Error retrieving crop data:', error);
            res.status(500).json({ error: 'Failed to retrieve crop data' });
          });
      })
      .catch((error) => {
        console.log("o")
        console.error('Error finding crop:', error);
        res.status(500).json({ error: 'Failed to retrieve crop data' });
      });
  };
