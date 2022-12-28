const Data = {
  myposts: {
    posts: [
      { id: '1', message: 'Hello!', likesCount: 5 },
      { id: '3', message: 'Hello!', likesCount: 4 },
    ],
  },

  dialogs: {
    items: [
      { id: '1', name: 'Anton' },
      { id: '3', name: 'Andrei' },
      { id: '3', name: 'Sergei' },
      { id: '4', name: 'Petr' },
      { id: '5', name: 'Ivan' },
      { id: '6', name: 'Dima' },
    ],
    messages: [
      { id: '1', message: 'Hi' },
      { id: '3', message: 'Hello!' },
      { id: '3', message: 'Yo' },
      { id: '4', message: 'Excuse me' },
    ],
  },
};
export let addPost = (postMessage: string) => {
  debugger
  let newPost = {
    id: '5',
    message: postMessage,
    likesCount: 0,
  };
  console.log(newPost);
  Data.myposts.posts.push(newPost);
};
export default Data;
