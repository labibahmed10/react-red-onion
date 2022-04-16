import React from "react";
import SingleChooseUs from "./SingleChooseUs";
const chooseInfo = [
  {
    id: 1,
    image: "https://i.postimg.cc/26P03Jff/Choose-Us-1.png",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quae a! Harum voluptas sequi ducimus.",
    special: "Fast Delivery",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/J0ZPXq1H/Choose-Us-2.png",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quae a! Harum voluptas sequi ducimus.",
    special: "A Good Auto Responder",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/J7kTS1b7/Choose-Us-3.png",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quae a! Harum voluptas sequi ducimus.",
    special: "Home Delivery",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="my-16 px-20 ">
      <h1 className="text-3xl mt-5 font-semibold">Why Choose Us</h1>
      <p className="text-sm font-semibold py-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea velit <br /> dolore quas ipsa
        tempore quasi cum facilis delectus nihil!
      </p>

      <div className="grid grid-cols-3 gap-8">
        {chooseInfo.map((item) => (
          <SingleChooseUs key={item.id} item={item}></SingleChooseUs>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
