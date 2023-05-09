import mongoose from "mongoose";
// Define a Mongoose schema for the image file
// ነውስ ስቶረ ሳደርግ ቲትለ፣ደስችሪፕቲኦን አለ እና ምስል ምስሉን ዳታ ፡buffer bcha mewsed

    const newsfeed = new mongoose.Schema({
        category: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          date: {
            type: Date,
            default: Date.now,
          },
          image: {
            data: Buffer,
            contentType: String,
          },
     
    });
    
    export default mongoose.model('newsmodel', newsfeed);
   
    // title: Represents the title of the news article specific to farmers. It is of type String and is required.

    // description: Represents the description or content of the news article specific to farmers. It is of type String and is required.
    
    // category: Represents the category of the news article. This field can be used to classify the news article into different categories, such as weather, crop, agricultural technology, government policy, etc. It is of type String and is required.
    
    // date: Represents the date of the news article. It is of type Date and is required.