import React from "react";
import { easeOut, motion } from "framer-motion";
import bannerimg1 from "../../assets/team/bannerimage1.jpg";
import bannerimg2 from "../../assets/team/bannerimage2.jpg";

export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={bannerimg1}
            animate={{ y: [20, 80, 20] }}
            transition={{ duration: 13, repeat: Infinity }}
            className="max-w-sm w-64 border-l-4 border-b-4 border-blue-700 rounded-t-[40px] rounded-br-4xl shadow-2xl"
          />
          <motion.img
            src={bannerimg2}
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm w-55 border-l-4 border-b-4 border-blue-700 rounded-t-[40px] rounded-br-4xl shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#33fff6", "#fffc33", " #d21d9e "] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            for you
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
