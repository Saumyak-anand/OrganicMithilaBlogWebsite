"use client";
import React from "react";
import Accordion from "./Accordion";

const Help = () => {
  // This array holds the data for your accordion
  const faqItems = [
    {
      title: "Where to purchase our products?",
      content:
        "You can purchase our products either from E-commerce websites like Amazon, Flipkart, Wallmart etc or directly purchase them from our website: mithilanaturals.com",
    },
    {
      title: "Do we deliver across India?",
      content:
        "Yes we do deliver across India, we have a tie up with Post India which helps us fulfill our needs and deliver the products to our happy customers. Generally there is a minimal cost of delivery needed to deliver the product.",
    },
    {
      title: "Why are our products expensive?",
      content:
        "After the harvesting season, our products are handpicked from the ponds of Mithilanchal, each makhana weaving its own story of authenticity. The batch is examined carefully with 5-6 insepction checks to ensure that our customers recieve a healthy product. We also ensure that our customers recieve our products of Highest Quality. ",
    },
    {
      title: "Want to become our Retail partner?",
      content:
        "We are glad that you have decided to become our Retail partner, in spreading the nutricious value of God's own food. You can further contact us at  +91 7520059556  or reach us out via mail: namaste@organicmithila.com ",
    },
    {
      title: "How many types of Makhana are there?",
      content:
        "There are 6 types of Makhana categories depending on size. It is measured in Suta where 1-Suta is the smallest size & 6-Suta is the biggest size. It is our effort to ensure that our customers recieve Makhana of large sizes ranging from 4-6 Suta.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-extrabold text-cyan-700 leading-tight mb-4">
        Have Any Questions?
      </h2>
      <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto text-center">
        You'll find most of your questions answered down below
      </p>
      <Accordion items={faqItems} />
    </div>
  );
};

export default Help;
