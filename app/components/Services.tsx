"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, cardHover } from "../utils/animations";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  title: string;
  subtitle: string;
  services: Service[];
  id?: string;
}

export default function Services({ title, subtitle, services, id }: ServicesProps) {
  return (
    <section id={id} className="py-24 px-6 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1"
              variants={fadeInUp}
              whileHover={cardHover}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                    <span className="text-2xl group-hover:brightness-200 transition-all">
                      {service.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">{service.title}</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
