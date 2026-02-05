"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../../utils/animations";
import { useParams } from 'next/navigation';
import { blogPosts } from "../../data/blogPosts";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-purple-600 hover:text-purple-800">Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=16"
            alt="Blog post background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
            >
              {post.title}
            </motion.h1>
            <motion.div
              className="flex items-center text-white/90 mb-12"
              variants={fadeInUp}
            >
              <Image src={post.img} alt={post.title} width={48} height={48} className="mr-4 rounded-full" />
              <div>
                <p className="text-lg">{post.author}</p>
                <p className="text-sm">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
            >
              <Link
                href="/blog"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                ← Back to Blog
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" className="relative w-full h-[120px]">
            <path
              fill="#ffffff"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <motion.div
          className="container mx-auto max-w-4xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="prose prose-lg max-w-none text-gray-700"
            variants={fadeInUp}
          >
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.text}</p>
            <div className="whitespace-pre-line">{post.content}</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Related Images Section */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div
          className="container mx-auto max-w-6xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Related Images
            </h2>
            <p className="text-lg text-gray-600">
              Visual insights related to this topic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: num * 0.1 }}
              >
                <Image
                  src={`https://picsum.photos/600/400?random=${num + 20}`}
                  alt={`Related image ${num}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=17"
            alt="CTA background"
            fill
            className="object-cover"
            priority
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
              Enjoyed This Article?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Check out more of our latest insights and stay updated with the tech world.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/blog"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Read More Articles
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
