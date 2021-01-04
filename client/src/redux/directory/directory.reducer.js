const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imgUrl: "/assets/images/hats.png",
      id:1,
      size: ''
    },
    {
      title: "jackets",
      imgUrl: "/assets/images/jackets.png",
      id:2,
      size: ''
    },
    {
      title: "sneakers",
      imgUrl: "/assets/images/sneakers.png",
      id:3,
      size: ''
    },
    {
      title: "men",
      imgUrl: "/assets/images/men.png",
      id:4,
      size: 'large'
    },
    {
      title: "women",
      imgUrl: "/assets/images/women.png",
      id:5,
      size: 'large'
    },
  ]
}

const directoryReducer = (state=INITIAL_STATE, action) => {
  return state
}

export default directoryReducer;