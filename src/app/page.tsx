import Image from 'next/image';

const images = [
  "IMG_0024.jpg", "IMG_0025.jpg", "IMG_0030.jpg", "IMG_0057.jpg",
  "IMG_0062.jpg", "IMG_0064.jpg", "IMG_0066.jpg", "IMG_0067.jpg",
  "IMG_0084.jpg", "IMG_0085.jpg", "IMG_0086.jpg", "IMG_0088.jpg",
  "IMG_0094.jpg", "IMG_0101.jpg", "IMG_0105.jpg", "IMG_0174.jpg",
  "IMG_0177.jpg", "IMG_9755.jpg", "IMG_9766.jpg", "IMG_9767.jpg",
  "IMG_9772.jpg", "IMG_9773.jpg", "IMG_9774.jpg", "IMG_9775.jpg",
  "IMG_9776.jpg", "IMG_9779.jpg", "IMG_9785.jpg", "IMG_9788.jpg",
  "IMG_9791.jpg", "IMG_9793.jpg", "IMG_9796.jpg", "IMG_9797.jpg",
  "IMG_9798.jpg", "IMG_9799.jpg", "IMG_9800.jpg", "IMG_9801.jpg",
  "IMG_9802.jpg", "IMG_9806.jpg",
  "IMG_9814.jpg", "IMG_9815.jpg", "IMG_9816.jpg", "IMG_9826.jpg",
  "IMG_9847.jpg", "IMG_9853.jpg", "IMG_9869.jpg", "IMG_9870.jpg",
  "IMG_9922.jpg"
];

export default function Home() {
  return (
    <main className="h-dvh overflow-y-auto overflow-x-hidden bg-[#F0EFEB] relative selection:bg-black selection:text-white">

      {/* Fixed Left Header */}
      <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50 pointer-events-none mix-blend-difference text-white flex flex-col items-start">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tighter leading-none mb-1">nyc.</h1>
        <p className="text-xs md:text-sm font-sans tracking-widest opacity-80">04.30 — 05.04</p>
      </div>

      {/* Scattered Gallery Grid that spans the whole screen */}
      <div className="min-h-full w-full p-4 sm:p-8 md:p-16 lg:p-24 flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 pb-32 md:pb-40">
        {images.map((img, index) => {
          // Responsive scattered margins and shrunken varied widths
          const margins = [
            'mt-0',
            'mt-6 md:mt-16 lg:mt-24',
            'mt-10 md:mt-24 lg:mt-32',
            '-mt-4 md:-mt-12',
            'mt-8 md:mt-20 lg:mt-24',
            '-mt-6 md:-mt-16 lg:-mt-20',
            'mt-4 md:mt-10 lg:mt-12',
            '-mt-2 md:-mt-6 lg:-mt-8'
          ];
          const widths = [
            'w-16 sm:w-24 md:w-32 lg:w-40',
            'w-20 sm:w-28 md:w-36 lg:w-44',
            'w-24 sm:w-32 md:w-40 lg:w-48',
            'w-16 sm:w-20 md:w-28 lg:w-36'
          ];

          const margin = margins[(index * 3) % margins.length];
          const width = widths[(index * 5) % widths.length];

          return (
            <div
              key={img}
              className={`relative shadow-xl shadow-black/10 hover:z-40 cursor-pointer ${width} ${margin}`}
            >
              {/* Grayscale filter with a smooth transition to color on hover */}
              <div className="relative w-full aspect-4/5 overflow-hidden bg-black/5 grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={`/images/nyc/${img}`}
                  alt={img}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover"
                  quality={75}
                />
              </div>
            </div>
          );
        })}
      </div>

    </main>
  );
}
