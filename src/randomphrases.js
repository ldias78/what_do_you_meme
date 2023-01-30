import React from "react";

const Randomphrases = [
  {
    quote:
      "When you're trying to be a good citizen but the government is too corrupt",
    id: 1,
  },

  {
    quote: "When you're trying to be a good friend but they cancel plans",
    id: 2,
  },

  {
    quote: "When you're trying to be a good human but the world is too chaotic",
    id: 3,
  },

  {
    quote:
      "When you're trying to be a good listener but your mind is on the food",
    id: 4,
  },

  {
    quote:
      "When you're trying to be a good host but the guests are too demanding",
    id: 5,
  },

  {
    quote: "Behind every great man is a woman rolling her eyes.",
    id: 6,
  },

  { quote: "Don/'t you bring Lady Gaga into this.", id: 7 },

  { quote: "Do you like pie? Fruit should not be hot.", id: 8 },

  {
    quote:
      "Oh, my god! They are as pale like a zombie! You know they eat the hottest people first. Let me back my tasty ass up.",
    id: 9,
  },

  {
    quote:
      "People waste their time pondering whether a glass is half empty or half full. Me, I just drink whatever’s in the glass",
    id: 10,
  },

  { quote: "I won't have a good day, actually.", id: 11 },

  { quote: "I hate to admit it, but they melts my Haagen-Dazs", id: 12 },

  {
    quote:
      "My mother always used to say: The older you get, the better you get, unless you're a banana.",
    id: 13,
  },

  {
    quote: "You know I'm a feminist. That's why I let you pay for all my stuff",
    id: 14,
  },

  {
    quote: "She's really a very sweet woman. She just doesn't like to show it.",
    id: 15,
  },

  { quote: "I'm not a criminal, I'm an outlaw.", id: 16 },

  {
    quote:
      "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em late",
    id: 17,
  },

  {
    quote:
      "I don’t believe in astrology; I'm a Sagittarius and we're skeptical.",
    id: 18,
  },

  { quote: "I'm not a kid anymore, I'm a grown-up.", id: 19 },

  {
    quote:
      "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
    id: 20,
  },

  {
    quote:
      "Doing nothing is very hard to do… you never know when you're finished.",
    id: 21,
  },

  {
    quote:
      "I always wanted to be somebody, but now I realize I should have been more specific.",
    id: 22,
  },

  { quote: "When people say 'it's always the last place you look", id: 23 },

  { quote: "When you're trying to act like you're listening", id: 24 },

  { quote: "When you're trying to act like you're listening", id: 25 },

  { quote: "When you're trying to act like you're listening", id: 26 },

  { quote: "When you're trying to act like you're listening", id: 27 },

  { quote: "When you're trying to act like you're listening", id: 28 },

  { quote: "When you're trying to act like you're listening", id: 29 },

  { quote: "When you're trying to act like you're listening", id: 30 },

  { quote: "When you're trying to act like you're listening", id: 31 },

  { quote: "When you're trying to act like you're listening", id: 32 },

  { quote: "When you're trying to act like you're listening", id: 33 },

  { quote: "When you're trying to act like you're listening", id: 34 },

  { quote: "When you're trying to act like you're listening", id: 35 },

  { quote: "When you're trying to act like you're listening", id: 36 },

  { quote: "When you're trying to act like you're listening", id: 37 },

  { quote: "When you're trying to act like you're listening", id: 38 },

  { quote: "When you're trying to act like you're listening", id: 39 },

  { quote: "When you're trying to act like you're listening", id: 40 },

  { quote: "When you're trying to act like you're listening", id: 41 },

  { quote: "When you're trying to act like you're listening", id: 42 },

  { quote: "When you're trying to act like you're listening", id: 43 },

  { quote: "When you're trying to act like you're listening", id: 44 },

  { quote: "When you're trying to act like you're listening", id: 45 },

  { quote: "When you're trying to act like you're listening", id: 46 },

  { quote: "When you're trying to act like you're listening", id: 47 },

  { quote: "When you're trying to act like you're listening", id: 48 },

  { quote: "When you're trying to act like you're listening", id: 49 },

  { quote: "When you're trying to act like you're listening", id: 50 },

  { quote: "When you're trying to act like you're listening", id: 51 },

  { quote: "When you're trying to act like you're listening", id: 52 },

  { quote: "When you're trying to act like you're listening", id: 53 },

  { quote: "When you're trying to act like you're listening", id: 54 },

  { quote: "When you're trying to act like you're listening", id: 55 },

  { quote: "When you're trying to act like you're listening", id: 56 },

  { quote: "When you're trying to act like you're listening", id: 57 },

  { quote: "When you're trying to act like you're listening", id: 58 },

  { quote: "When you're trying to act like you're listening", id: 59 },

  { quote: "When you're trying to act like you're listening", id: 60 },

  { quote: "When you're trying to act like you're listening", id: 61 },

  { quote: "When you're trying to act like you're listening", id: 62 },

  { quote: "When you're trying to act like you're listening", id: 63 },

  { quote: "When you're trying to act like you're listening", id: 64 },

  { quote: "When you're trying to act like you're listening", id: 65 },

  { quote: "When you're trying to act like you're listening", id: 66 },

  { quote: "When you're trying to act like you're listening", id: 67 },

  { quote: "When you're trying to act like you're listening", id: 68 },

  { quote: "When you're trying to act like you're listening", id: 69 },

  { quote: "When you're trying to act like you're listening", id: 70 },

  { quote: "When you're trying to act like you're listening", id: 71 },

  { quote: "When you're trying to act like you're listening", id: 72 },

  { quote: "When you're trying to act like you're listening", id: 73 },

  { quote: "When you're trying to act like you're listening", id: 74 },

  { quote: "When you're trying to act like you're listening", id: 75 },

  { quote: "When you're trying to act like you're listening", id: 76 },

  { quote: "When you're trying to act like you're listening", id: 77 },

  { quote: "When you're trying to act like you're listening", id: 78 },

  { quote: "When you're trying to act like you're listening", id: 79 },

  { quote: "When you're trying to act like you're listening", id: 80 },

  { quote: "When you're trying to act like you're listening", id: 81 },

  { quote: "When you're trying to act like you're listening", id: 82 },

  { quote: "When you're trying to act like you're listening", id: 83 },

  { quote: "When you're trying to act like you're listening", id: 84 },

  { quote: "When you're trying to act like you're listening", id: 85 },

  { quote: "When you're trying to act like you're listening", id: 86 },

  { quote: "When you're trying to act like you're listening", id: 87 },

  { quote: "When you're trying to act like you're listening", id: 88 },

  { quote: "When you're trying to act like you're listening", id: 89 },

  { quote: "When you're trying to act like you're listening", id: 90 },

  { quote: "When you're trying to act like you're listening", id: 91 },

  { quote: "When you're trying to act like you're listening", id: 92 },

  { quote: "When you're trying to act like you're listening", id: 93 },

  { quote: "When you're trying to act like you're listening", id: 94 },

  { quote: "When you're trying to act like you're listening", id: 95 },

  { quote: "When you're trying to act like you're listening", id: 96 },

  { quote: "When you're trying to act like you're listening", id: 97 },

  { quote: "When you're trying to act like you're listening", id: 98 },

  { quote: "When you're trying to act like you're listening", id: 99 },

  { quote: "When you're trying to act like you're listening", id: 100 },
];

export default Randomphrases;
