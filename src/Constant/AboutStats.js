import noPreservative from "../assets/aboutsectionIMG/no-preservatives.png";
import handcrafted from "../assets/aboutsectionIMG/handcrafted.png";
import healthy from "../assets/aboutsectionIMG/healthy.png";
import oil from "../assets/aboutsectionIMG/oil.png";
import drying from "../assets/aboutsectionIMG/drying.png";

import bishwa from "../assets/aboutsectionIMG/bishwa.png";
import girman from "../assets/aboutsectionIMG/girman.png";
import prashan from "../assets/aboutsectionIMG/prashan.png";
import sankalpa from "../assets/aboutsectionIMG/sankalpa.png";
import rewaz from "../assets/aboutsectionIMG/rewaz.png";

export const stats = [
  {
    end: 10,
    duration: 5,
    text: "Years of Experience in Traditional Pickle Handcrafting",
    plus: true,
  },
  {
    end: 12,
    duration: 5,
    text: "Authentic Pickles Flavors",
    plus: true,
  },
  {
    end: 9,
    duration: 5,
    text: "Customer Satisfaction Ratings & Recommendations",
    plus: true,
  },
  {
    end: 80,
    duration: 4,
    text: "Local Farmers Sourced From, Supporting Sustainable Practices",
    plus: true,
  },
];

export const cardData = [
  {
    id: 1,
    img: healthy,
    title: "Healthy",
    description: "Prepared with locally sourced farm fresh ingredients.",
  },
  {
    id: 2,
    img: noPreservative,
    title: "Preservative-Free",
    description:
      "100% natural with no artificial preservatives, colors or flavours",
  },
  {
    id: 3,
    img: handcrafted,
    title: "Handcrafted",
    description: "At Home, with love, using our special recipes",
  },
  {
    id: 4,
    img: drying,
    title: "Aged Perfection",
    description: "Sundried for up to 10-20 days For superior taste and quality",
  },
  {
    id: 5,
    img: oil,
    title: "Cold Pressed Oil",
    description: "Made in 100% Cold Pressed Mustard Oil",
  },
];

export const reviewData = [
  {
    id: "001",
    customerName: "Bishwa Gurung",
    rating: 5,
    date: "2024-07-15",
    reviewText:
      "Absolutely thrilled with the service! The team went above and beyond my expectations. Highly recommend!",
    profilePic: bishwa,
  },
  {
    id: "002",
    customerName: "Sankalpa Tamang",
    rating: 4,
    date: "2024-07-10",
    reviewText:
      "Good quality products and fast delivery. There was a minor delay in communication, but overall satisfied.",
    profilePic: sankalpa,
  },
  {
    id: "003",
    customerName: "Prashan Pyakurel",
    rating: 5,
    date: "2024-07-08",
    reviewText:
      "Fantastic experience from start to finish. The website is easy to navigate and the support was excellent.",
    profilePic: prashan,
  },
  {
    id: "004",
    customerName: "Girman Magar",
    rating: 3,
    date: "2024-07-01",
    reviewText:
      "The product was okay, but it didn't quite meet my specific needs. Still, a decent purchase for the price.",
    profilePic: girman,
  },
  {
    id: "005",
    customerName: "Rewaz Khadka",
    rating: 5,
    date: "2024-06-25",
    reviewText:
      "Incredible value! I've been looking for a service like this for ages. Will definitely be a returning customer.",
    profilePic: rewaz,
  },
];

export default reviewData;
