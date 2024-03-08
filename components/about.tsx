"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Frontend Developer with hands-on experience in developing and
        maintaining cross-platform applications. Proficient in JavaScript,
        React, and RESTful APIs, with a proven track record of delivering
        high-quality Android, iOS, and web applications. Aiming to take on new
        challenges and contribute effectively to team success.
      </p>
    </motion.section>
  );
}
