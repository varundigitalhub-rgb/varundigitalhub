import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../../utils/animations";

export default function ClassesTemplate1() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Modern classroom with students learning"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            className="max-w-4xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
            >
              Learn & Grow
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Empowering minds through quality education. Where knowledge meets opportunity and dreams become reality.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want to use the Classes & Coaching template"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Get This Template
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
              >
                View Courses
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" className="relative w-full h-[120px]">
            <path fill="#ffffff" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              variants={fadeInUp}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              We believe every student has unlimited potential. Our experienced educators,
              personalized approach, and innovative teaching methods help students excel
              academically and build confidence for lifelong success.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Qualified teachers with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-600">Holistic learning covering all subjects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Consistent high success rates</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Our Programs
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Comprehensive courses designed to help students achieve their academic goals
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              { name: "Mathematics Excellence", desc: "Advanced concepts with practical applications", duration: "6 months", students: "50+" },
              { name: "Science Mastery", desc: "Physics, Chemistry, Biology comprehensive course", duration: "8 months", students: "75+" },
              { name: "English Proficiency", desc: "Grammar, literature, and communication skills", duration: "4 months", students: "60+" },
              { name: "Competitive Exam Prep", desc: "JEE, NEET, and entrance exam preparation", duration: "12 months", students: "100+" },
              { name: "Computer Science", desc: "Programming, web development, and IT skills", duration: "6 months", students: "40+" },
              { name: "Test Series", desc: "Regular mock tests and performance analysis", duration: "3 months", students: "200+" }
            ].map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-4xl">📖</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.desc}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Duration: {course.duration}</span>
                    <span>{course.students} students</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="Students studying together"
            fill
            className="object-cover"
          />
        </div>

        <motion.div
          className="container mx-auto relative z-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Coaching Institute?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get this professional education template customized for your institute
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want the Classes & Coaching template customized"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Visit Our Institute
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of successful students who chose us for their educational journey
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">456 Education Street<br />Mumbai, Maharashtra</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Timings</h3>
                <p className="text-gray-600">Mon-Sat: 8AM - 8PM<br />Sunday: 9AM - 5PM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">+91 93727 87128<br />info@learngrow.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
