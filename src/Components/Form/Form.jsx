import React, { useState } from "react";

const CommentForm = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, email, comment, image };
    setComments([newComment, ...comments]);
    setName("");
    setEmail("");
    setComment("");
    setImage(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white mt-20">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Leave a Comment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <input
            type="text"
            className="w-1/2 p-3 border-2 border-black rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-1/2 p-3 border-2 border-black rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <textarea
            className="w-full p-3 border-2  border-black rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Comment"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>

        
      </form>
      <div className="flex justify-center py-10">
        <button type="submit" className="w-[200px] border-2 border-black p-3 text-lg font-rufina text-black">
          Submit Comment
        </button>
      </div>
      <div className="mt-8">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 border border-gray-200 rounded-lg mb-4"
          >
            {comment.image && (
              <img
                src={comment.image}
                alt="Uploaded"
                className="w-16 h-16 rounded-full mb-4"
              />
            )}
            <h3 className="text-lg font-semibold text-gray-800">
              {comment.name}
            </h3>
            <p className="text-gray-600">{comment.comment}</p>
            <p className="text-sm text-gray-500">{comment.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;
