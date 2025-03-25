import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "SUNSETS", href: "/sunsets", imgSrc: "/img/cover/sunset_cover.jpg" },
  { name: "GRAPHICS", href: "/graphics", imgSrc: "/img/cover/crtvs.jpg" },
  { name: "PHOTOGRAPHY", href: "/photography", imgSrc: "/img/cover/Photogcover.jpg" },
  { name: "ACHIEVEMENTS", href: "/achievements", imgSrc: "/img/cover/achievements.jpg" },
  { name: "TRAININGS", href: "/trainings", imgSrc: "/img/cover/trainII.jpg" },
  { name: "CREATIVES", href: "/creatives", imgSrc: "/img/cover/BeST.png" },
  { name: "NATURE", href: "/nature", imgSrc: "/img/cover/nature.jpg" },
  { name: "IDOLS", href: "/idols", imgSrc: "/img/cover/8.jpg" },
  { name: "PUHON", href: "/puhon", imgSrc: "/img/cover/puhon.jpg" },
  { name: "PADAYON", href: "/padayon", imgSrc: "/img/cover/padayon_.jpg" },
];

export default function Album(){
    return(
        <div className="mt-2 mb-0.5 flex justify-center flex-wrap">
      {categories.map((category, index) => (
        <Link key={index} href={category.href} className="mt-10 ml-6 mr-6 mb-6">
          <div className="w-[200px] h-[260px] bg-[#727D73] rounded-[40px] flex flex-col items-center justify-center text-white drop-shadow-lg transition-transform duration-300 hover:scale-110">
            <div className="relative w-[200px] h-[240px]">
              <Image
                src={category.imgSrc}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="rounded-[40px] opacity-75"
              />
            </div>
            <p className="lg:text-xl sm:text-lg font-light text-center">{category.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}