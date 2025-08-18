import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  children,
  bg = "bg-black",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  bg?: string;
}) {
  // decide text color based on bg
  const isDark = bg.includes("black") || bg.includes("gray") || bg.includes("slate");
  const textColor = isDark ? "text-white" : "text-gray-900";

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-6xl mx-auto px-6 md:px-10 py-16 my-12 shadow-lg rounded-lg ${bg}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold mb-6 border-b pb-2 ${textColor}`}
      >
        {title}
      </motion.h2>

      <div className={`${textColor} leading-relaxed`}>{children}</div>
    </motion.section>
  );
}
