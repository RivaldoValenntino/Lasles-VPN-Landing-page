document.addEventListener("alpine:init", () => {
  Alpine.data("cardsData", () => ({
    cards: [
      {
        name: "John Doe",
        job: "Designer",
        rating: 4.9,
        review: "Wow... I am very happy to use this VPN.",
        avatar: "assets/avatar_1.png",
      },
      {
        name: "Yessica Christy",
        job: "Developer",
        rating: 4.7,
        review: "The VPN exceeded my expectations.",
        avatar: "assets/yessica.png",
      },
      {
        name: "Kim Young",
        job: "Manager",
        rating: 4.8,
        review: "Great experience so far!, I love it, I love it.",
        avatar: "assets/kim_young.png",
      },
      {
        name: "Nancy Jewel",
        job: "Manager",
        rating: 4.8,
        review: "Great experience so far!, I love it, I love it.",
        avatar: "assets/nancy.jpeg",
      },
      {
        name: "Yeh Shuhua",
        job: "Idol",
        rating: 4.7,
        review:
          "“I like it because I like to travel far and still can connect with high speed.”.",
        avatar: "assets/shuhua.jpeg",
      },
      {
        name: "Bae Joohyun",
        job: "Idol",
        rating: 4.7,
        review:
          "“I like it because I like to travel far and still can connect with high speed.”.",
        avatar: "assets/Irene.jpeg",
      },
    ],
  }));
});
