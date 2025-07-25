import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchComments,
  addComment,
  deleteComment,
} from '../features/comments/commentSlice';

export default function CommentSection({ taskId }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const comments = useSelector((state) => state.comments.byTaskId[taskId]) || [];
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(fetchComments(taskId));
  }, [dispatch, taskId]);

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addComment({ taskId, text }));
    setText('');
  };

  const handleDelete = (commentId) => {
    if (window.confirm('Delete this comment?')) {
      dispatch(deleteComment({ taskId, commentId }));
    }
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2 text-base sm:text-lg">Comments</h3>
      <div className="space-y-2">
        {comments.map((c) => (
          <div
            key={c._id}
            className="p-2 sm:p-3 bg-gray-100 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          >
            <div className="w-full">
              <p className="text-xs sm:text-sm">
                <span className="font-semibold">{c.user?.name}:</span> {c.text}
              </p>
              <p className="text-xs text-gray-500">{new Date(c.createdAt).toLocaleString()}</p>
            </div>
            {c.user?._id === user?.id && (
              <button
                onClick={() => handleDelete(c._id)}
                className="text-red-500 text-xs sm:text-sm ml-0 sm:ml-2"
              >
                 2716
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          className="flex-1 border px-2 py-1 rounded text-xs sm:text-sm"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm w-full sm:w-auto"
        >
          Post
        </button>
      </div>
    </div>
  );
}
