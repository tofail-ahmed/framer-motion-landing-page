import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const BatteryReplacement = () => {
      const {componentRef,style}=useScrollGrow()
//   const componentRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: componentRef,
//     offset: ["0 1", "1.2 1"],
//   });
// //   const scaleValues=useTransform(scrollYProgress,[0,1],[0.5,1])
//   const opacityValues=useTransform(scrollYProgress,[0,1],[0.5,1])
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-rose-500/70 h-[150px] lg:h-[415px] rounded-sm col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
