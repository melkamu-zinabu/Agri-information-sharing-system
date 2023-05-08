import neewsfeed from "../model/neewsfeed.js";

//Add a new FarmerNews record:
export const addnews=async(req,res,next)=>{
    try {
        const farmerNews = new neewsfeed(req.body);
        await farmerNews.save();
        console.log(req.body)
        res.status(201).json(farmerNews);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
}

//Retrieve all FarmerNews records:
export const getnews=async(req,res,next)=>{
try {
    const farmerNews = await neewsfeed.find();
    res.json(farmerNews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

//Retrieve a specific FarmerNews record by ID:
export const getnewsbyid= async (req, res) => {
    const { id } = req.params;
  
    try {
      const farmerNews = await neewsfeed.findById(id);
      if (!farmerNews) {
        return res.status(404).json({ message: 'FarmerNews not found' });
      }
      res.json(farmerNews);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  //Update a FarmerNews record by ID:

  export const updatenews=async (req, res) => {
    const { id } = req.params;
  
    try {
      const farmerNews = await neewsfeed.findByIdAndUpdate(id, req.body, { new: true });
      if (!farmerNews) {
        return res.status(404).json({ message: 'FarmerNews not found' });
      }
      res.json(farmerNews);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
//Delete a FarmerNews record by ID:
  export const deletenews=async (req, res) => {
    const { id } = req.params;
  
    try {
      const farmerNews = await neewsfeed.findByIdAndDelete(id);
      if (!farmerNews) {
        return res.status(404).json({ message: 'FarmerNews not found' });
      }
      res.json({ message: 'FarmerNews deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  


  