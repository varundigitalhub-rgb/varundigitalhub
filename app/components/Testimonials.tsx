import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  backgroundColor?: string;
  className?: string;
}

export default function Testimonials({
  title = "Client Success Stories",
  subtitle = "Hear what our clients have to say about working with us.",
  testimonials,
  backgroundColor = "bg-purple-50",
  className = ""
}: TestimonialsProps) {
  return (
    <section className={`py-24 px-6 ${backgroundColor} ${className}`}>
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
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
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
                  src={testimonial.image || `https://picsum.photos/100/100?random=${index + 6}`}
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
