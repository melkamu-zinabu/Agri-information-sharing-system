
export const getImageById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const image = await Images.findById(id);
      if (!image) {
        return res.status(404).send('Image not found');
      }
      res.type(image.img.contentType);
      res.send(image.img.data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving image');
    }
  };