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
    const search = req.query.search || "";
    const filter = req.query.filter || "";// by category
    const startDate = req.query.startDate || "";
    const endDate = req.query.endDate || "";
  

     // Construct the query object
     const query = {};
     if (search) {
       query.$or = [
         { title: { $regex: search, $options: 'i' } },
         { description: { $regex: search, $options: 'i' } },
       ];
     }
     if (filter) {
       query.category = filter;
     }
     if (startDate && endDate) {
       query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
     } else if (startDate) {
       query.date = { $gte: new Date(startDate) };
     } else if (endDate) {
       query.date = { $lte: new Date(endDate) };
     }




    
    const farmerNews = await neewsfeed.find(query);
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
  


  