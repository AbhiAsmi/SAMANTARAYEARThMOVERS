import React from "react";
import { motion } from "framer-motion";

const Building = () => {
  return (
    <div className="min-h-screen w-full bg-black pt-[100px] pb-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 25px 8px rgba(0, 255, 255, 0.7)"
          }}
          whileTap={{
            scale: 1.06,
            boxShadow: "0 0 25px 8px rgba(0, 255, 255, 0.7)"
          }}
          className="h-[250px] md:h-[300px] w-full md:w-[50%] rounded-xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/2237210492/photo/office-building.jpg?s=2048x2048&w=is&k=20&c=Vu-1P4lh2K9AwotyqHMBS2YSM3Ty_-pj7ILmo-xXQSc=')",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="h-auto md:h-[250px] w-full md:w-[35%] bg-black rounded-xl"
        >
          <p className="text-white p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt laborum,
            eius quod consequatur atque earum illum possimus, eos placeat ducimus alias corrupti cum
            maiores cumque sapiente voluptatibus voluptate.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="h-auto md:h-[250px] w-full md:w-[35%] bg-black rounded-xl"
        >
          <p className="text-white p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt laborum,
            eius quod consequatur atque earum illum possimus, eos placeat ducimus alias corrupti cum
            maiores cumque sapiente voluptatibus voluptate.
          </p>
        </motion.div>

        {/* IMAGE BOX 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 25px 8px rgba(0, 255, 255, 0.7)"
          }}
          whileTap={{
            scale: 1.06,
            boxShadow: "0 0 25px 8px rgba(0, 255, 255, 0.7)"
          }}
          className="h-[250px] md:h-[300px] w-full md:w-[50%] rounded-xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*1rlk43l*_ga*MTUzMzI1MTEwMy4xNzU3MDgxODU2*_ga_8JE65Q40S6*czE3NjMwNTg1MDIkbzEyJGcxJHQxNzYzMDU4NTI0JGozOCRsMCRoMA..')",
          }}
        />
      </div>

    </div>
  );
};

export default Building;
