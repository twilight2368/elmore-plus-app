function FriendRequestNotiGenerator({ senderName }) {
  return `${senderName} has sent you a friend request`
}

function FriendRejectNotiGenerator({ senderName }) {
  return `${senderName} has rejected your friend request`
}

function FriendAcceptNotiGenerator({ senderName }) {
  return `${senderName} has accepted your friend request`
}

function LikePostNotiGenerator({ senderName, postContent }) {
  return `${senderName} has react to your post: ${postContent}`
}

function CommentPostNotiGenerator({ senderName, commentContent }) {
  return `${senderName} has commented on your post: ${commentContent}`
}

function LikeCommentNotiGenerator({ senderName, commentContent }) {
  return `${senderName} has react to your comment: ${commentContent}`
}

function ReplyCommentNotiGenerator({ senderName, commentContent }) {
  return `${senderName} has reply to your comment: ${commentContent}`
}

const template = {
  "friend-request": FriendRequestNotiGenerator,
  "friend-reject": FriendRejectNotiGenerator,
  "friend-accept": FriendAcceptNotiGenerator,
  "like-post": LikePostNotiGenerator,
  "comment-post": CommentPostNotiGenerator,
  "like-comment": LikeCommentNotiGenerator,
  "reply-comment": ReplyCommentNotiGenerator
}

function notificationGenerator(notiType, notiInfo) {
  return template[notiType](notiInfo)
}

module.exports = notificationGenerator
