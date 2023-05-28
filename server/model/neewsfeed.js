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


   

// const commentSchema = new mongoose.Schema({
//   content: {
//     type: String,
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });



// routes/comment.js
// import express from "express";
// import {
//   createComment,
//   getComments,
//   updateComment,
//   deleteComment,
// } from "../controllers/commentController";
// {
// const router = express.Router();

// // Create a new comment
// router.post("/", createComment);

// // Get all comments
// router.get("/", getComments);

// // Update a comment
// router.put("/:commentId", updateComment);

// // Delete a comment
// router.delete("/:commentId", deleteComment);

// export default router;
// }



// controllers/commentController.js
// import Comment from "../models/comment";

// // Create a new comment
// export const createComment = async (req, res) => {
//   try {
//     const { content, user } = req.body;
//     const newComment = new Comment({ content, user });
//     await newComment.save();
//     res.status(201).json(newComment);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to create a comment" });
//   }
// };

// // Get comments  at the bottom there is front end code for this
// export const getComments = async (req, res) => {
//   try {
//     const { limit } = req.query;
//     const comments = await Comment.find().limit(parseInt(limit));
//     res.status(200).json(comments);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to get comments" });
//   }
// };

// // Update a comment
// export const updateComment = async (req, res) => {
//   try {
//     const { commentId } = req.params;
//     const { content } = req.body;
//     const updatedComment = await Comment.findByIdAndUpdate(
//       commentId,
//       { content },
//       { new: true }
//     );
//     if (!updatedComment) {
//       return res.status(404).json({ error: "Comment not found" });
//     }
//     res.status(200).json(updatedComment);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update the comment" });
//   }
// };

// // Delete a comment
// export const deleteComment = async (req, res) => {
//   try {
//     const { commentId } = req.params;
//     const deletedComment = await Comment.findByIdAndDelete(commentId);
//     if (!deletedComment) {
//       return res.status(404).json({ error: "Comment not found" });
//     }
//     res.status(200).json({ message: "Comment deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete the comment" });
//   }
// };


//front end code

// const CommentComponent = () => {
//   const [comments, setComments] = useState([]);
//   const [displayedCommentsCount, setDisplayedCommentsCount] = useState(2);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(`/api/comments?limit=${displayedCommentsCount}`);
//       setComments(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleLoadMore = () => {
//     setDisplayedCommentsCount(displayedCommentsCount + 2);
//   };

//   const handleCollapseExpand = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div>
//       {/* Render comments */}
//       {comments.map((comment) => (
//         <div key={comment._id}>{comment.content}</div>
//       ))}

//       {/* Load More button */}
//       {comments.length >= displayedCommentsCount && (
//         <button onClick={handleLoadMore}>Load More</button>
//       )}

//       {/* Collapse/Expand button */}
//       {comments.length > 0 && (
//         <button onClick={handleCollapseExpand}>
//           {isCollapsed ? "Expand" : "Collapse"}
//         </button>
//       )}
//     </div>
//   );
// };


