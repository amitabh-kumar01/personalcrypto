
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EffectBlockProps {
  children: ReactNode;
  delay?: number;
  bgColor?: string;
}

export const EffectBlock = ({
  children,
  delay = 0,
  bgColor = "bg-blue-500",
}: EffectBlockProps) => {
  return (
    <motion.div className="relative overflow-visible ">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 1.5, duration: 0.0001 }}
        className="block"
      >
        {children}
      </motion.span>
      <motion.div
        className={`absolute inset-0 ${bgColor}`}
        initial={{ width: "0%" }}
        animate={{
          left: ["0%", "0%", "100%"],
          width: ["0%", "100%", "0%"],
        }}
        transition={{
          times: [0, 0.5, 1],
          delay,
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export const EffectBlockTopToBottom = ({
  children,
  delay = 0,
  bgColor = "bg-customYellow",
}: EffectBlockProps) => {
  return (
    <motion.div className="relative overflow-visible min-h-fit">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5, duration: 0.001 }}
        className="block"
      >
        {children}
      </motion.span>
      <motion.div
        className={`absolute inset-0 ${bgColor}`}
        initial={{ height: "0%", bottom: "0%" }}
        animate={{
          top: "100%",  
          height: ["100%","0%"],
        }}
        exit={{ opacity: 0 }} 
        transition={{
          delay,
          duration: 0.6, 
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};


export const EffectBlockBottomToTop = ({
  children,
  delay = 0,
  bgColor = "bg-customYellow",
}: EffectBlockProps) => {
  return (
    <motion.div className="relative overflow-visible min-h-fit">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5, duration: 0.001 }}
        className="block"
      >
        {children}
      </motion.span>
      <motion.div
        className={`absolute inset-0 ${bgColor}`}
        initial={{ height: "0%", bottom: "0%" }}
        animate={{
          bottom: "100%",  
          height: ["100%","0%"],
        }}
        exit={{ opacity: 0 }} 
        transition={{
          delay,
          duration: 0.6, 
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
