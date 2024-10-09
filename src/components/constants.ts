import { bitcoin, iota, omigo, ripple, zcash } from "@/assets";

import { introIcon1, introIcon2, introIcon3 } from "@/assets";

import { price1, price2, price3,profile1,profile2,profile3 } from "@/assets/sharedSection";

export const CarouselData = [
  {
    name: "Bitcoin",
    image: bitcoin,
  },
  {
    name: "Ripple",
    image: ripple,
  },
  {
    name: "OmiseGO",
    image: omigo,
  },
  {
    name: "Zcash",
    image: zcash,
  },
  {
    name: "IOTA",
    image: iota,
  },
];
export const features = [
  {
    icon: introIcon1,
    title: "#1 Digital Currency",
    description:
      "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.",
  },
  {
    icon: introIcon2,
    title: "Encryption Techniques",
    description:
      "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.",
  },
  {
    icon: introIcon3,
    title: "Independent of Banks",
    description:
      "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.",
  },
];

export const positions = [
  { top: "0%", left: "8%", width: "40px", rotation: "10deg" },
  { top: "0%", left: "40%", width: "60px", rotation: "20deg" },
  { top: "16%", left: "5%", width: "40px", rotation: "30deg" },
  { top: "6%", left: "20%", width: "50px", rotation: "15deg" },
  { top: "25%", left: "10%", width: "55px", rotation: "25deg" },
  { top: "28%", left: "40%", width: "30px", rotation: "5deg" },
  { top: "30%", left: "90%", width: "65px", rotation: "35deg" },
  { top: "100%", left: "30%", width: "145px", rotation: "45deg" },
];

export const cryptoData = [
  { name: "BITCOIN", percentage: 76, color: "#FFA500" },
  { name: "ETHERIUM", percentage: 69, color: "#00FF99" },
  { name: "RIPPLE", percentage: 57, color: "#FF0080" },
  { name: "ZCASH", percentage: 67, color: "#00FFFF" },
];



export const pricingPlans = [
  {
    name: "Mycelium",
    logo: price1.src,
    price: "$50",
    features: [
      { text: "Control over your money", status: "check" },
      { text: "Centralized validation", status: "check" },
      { text: "Remote app", status: "dash" },
      { text: "Vulnerable environment", status: "check" },
      { text: "Basic privacy", status: "check" },
      { text: "Discloses information to third party", status: "dash" },
      { text: "Dynamic fee with override", status: "check" },
     
    ],
  },
  {
    name: "Armory",
    logo: price2.src,
    price: "$20",
    features: [
      { text: "Control over your money", status: "check" },
      { text: "Centralized validation", status: "check" },
      { text: "Remote app", status: "check" },
      { text: "Vulnerable environment", status: "check" },
      { text: "Basic privacy", status: "check" },
      { text: "Discloses information to third party", status: "check" },
      { text: "Dynamic fee with override", status: "dash" },
    ],
  },
  {
    name: "Exodus",
    logo: price3.src,
    price: "$100",
    features: [
      { text: "Control over your money", status: "check" },
      { text: "Centralized validation", status: "dash" },
      { text: "Remote app", status: "check" },
      { text: "Vulnerable environment", status: "check" },
      { text: "Basic privacy", status: "dash" },
      { text: "Discloses information to third party", status: "check" },
      { text: "Dynamic fee with override", status: "check" },
     
    ],
  },
];



const testimonials = [
  {
    name: "Stephanie Welch",
    position: "INVISION",
    quote: "Great to stay on top of the process. Especially liked to play with the financial section when viewing properties. Highly recommended!",
    image: profile1.src,
  },
  {
    name: "Sylvester Knight",
    position: "AIRBNB",
    quote: "Just started flat hunting. Your affordability calculator saved me some serious time to focus on what I can actually buy. Thanks so much.",
    image: profile2.src,
  },
  {
    name: "Andrew Bradshaw",
    position: "EVERNOTE",
    quote: "Thanks Plentific for helping us stay on top of a very stressful process! Finally exchanged and looking forward to complete.",
    image: profile3.src,
  },
  
  {
    name: "Stephanie Welch",
    position: "INVISION",
    quote: "Great to stay on top of the process. Especially liked to play with the financial section when viewing properties. Highly recommended!",
    image: profile1.src,
  },
  {
    name: "Sylvester Knight",
    position: "AIRBNB",
    quote: "Just started flat hunting. Your affordability calculator saved me some serious time to focus on what I can actually buy. Thanks so much.",
    image: profile2.src,
  },
  {
    name: "Andrew Bradshaw",
    position: "EVERNOTE",
    quote: "Thanks Plentific for helping us stay on top of a very stressful process! Finally exchanged and looking forward to complete.",
    image: profile3.src,
  },
];

export default testimonials;
