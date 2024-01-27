import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";


const DataRecovery = () => {
      const {componentRef,style}=useScrollGrow()

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-rose-500/70 h-[150px] lg:h-[415px] rounded-sm col-span-6 lg:col-span-7"
    ></motion.div>
  );
};

export default DataRecovery;
