
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";


const Contact = () => {
  return (
    <div
      className={`flex flex-col-reverse gap-15 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />
       
        <h3 className="mb-4 font-medium text-white">Email : k.saad1281@gmail.com</h3>
        <h3 className="mb-4 font-medium text-white">LinkedIN : https://www.linkedin.com/in/khaled-saad-3b94b817b</h3>
        <h3 className="mb-4 font-medium text-white">WhatsApp : +201141501094</h3>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
