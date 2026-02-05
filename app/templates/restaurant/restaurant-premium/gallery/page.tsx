import Image from "next/image";
import RestaurantPremiumLayout from "../layout";

export default function RestaurantPremiumGallery() {
  const brandName = "Aurora Fine Dine";

  const images = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <RestaurantPremiumLayout brandName={brandName}>
      <section className="bg-black px-6 py-14 text-xs text-zinc-200">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-2xl font-semibold text-amber-200">Gallery</h1>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {images.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-44 overflow-hidden rounded-2xl bg-zinc-900"
              >
                <Image
                  src={src}
                  alt={`Premium ambience ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </RestaurantPremiumLayout>
  );
}

