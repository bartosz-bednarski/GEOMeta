type comment = {
  date: string;
  iconBackgroundColor: string;
  time: string;
  usernameShort: string;
};
export type topics = [
  {
    comments: [comment];
    date: string;
    dateString: string;
    iconBackgroundColor: string;
    latestUpdate: string;
    timeString: string;
    topic: string;
    topic_id: string;
    username: string;
    usernameShort: string;
    _id: string;
  }
];
export type topicBoxProps = {
  dateString: string;
  timeString: string;
  topic: string;
  topic_id: string;
  commentsArr: comment[];
  username: string;
  iconBackgroundColor: string;
  usernameShort: string;
  type: string;
  onClick: () => void;
};
export type topicLoader = {
  data: topic;
  message: string;
};
export type topic = [
  {
    comment_id: string;
    content: string;
    date: string;
    dateString: string;
    iconBackgroundColor: string;
    timeString: string;
    topic_id: string;
    username: string;
    usernameShort: string;
    _id: string;
  }
];

export type commentProps = {
  username: string;
  usernameShort: string;
  dateString: string;
  iconBackgroundColor: string;
  timeString: string;
  content: string;
};

export type addCommentProps = {
  onCommentsUpdate: () => void;
  topicId: string;
};
