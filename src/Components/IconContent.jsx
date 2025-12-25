import React from "react";

const IconContent = () => {
  const items = [
    { img: "icon/Gemini_Generated_Image_1rxzly1rxzly1rxz.png", label: "Construction Equipments" },
    { img: "icon/Gemini_Generated_Image_bnl6n9bnl6n9bnl6.png", label: "Dump Truck" },
    { img: "icon/Gemini_Generated_Image_jbt2tfjbt2tfjbt2 (1).png", label: "Road Machine" },
    { img: "icon/Gemini_Generated_Image_tflzn9tflzn9tflz.png", label: "Equipments" },
    { img: "icon/Gemini_Generated_Image_1rxzly1rxzly1rxz.png", label: "Equipments" },
  ];

  return (
    <section className="min-h-[45vh] w-full bg-white flex items-center justify-center py-16 px-6 md:px-16">
      <div
        className="
          w-full max-w-5xl
          grid gap-6
          grid-cols-2     
          sm:grid-cols-2    
          lg:grid-cols-5    
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl 
              h-[260px]
              flex flex-col items-center justify-between
              p-6
              shadow-md

              transition-all duration-300 ease-out
              hover:scale-105
              hover:shadow-[0_0_30px_6px_rgba(255,140,0,0.7)]
            "
          >
            <div className="w-full h-[75%] flex items-center justify-center">
              <img
                src={item.img}
                alt={item.label}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h3 className="text-black font-semibold text-center text-[16px]">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconContent;
