"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";

const testimonials = [
  {
    text: "Working with this team was transformative for our business. They delivered beyond our expectations.",
    author: "Devgan Mukhiya",
    role: "CEO, MethodMask",
    image: "/VARUN-DP1.png"
  },
  {
    text: "The attention to detail and creative solutions provided were exactly what we needed.",
    author: "Michael Chen",
    role: "Founder, Design Co",
    image: "/next.svg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-purple-50">
      <motion.div
        className="container mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.text}"</p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  src={`https://picsum.photos/100/100?random=${index + 6}`}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full mr-4 border-2 border-purple-100"
                />
                <div>
                  <div className="font-semibold text-purple-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
