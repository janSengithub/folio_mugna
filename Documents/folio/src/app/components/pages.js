"use client"; // Required for client-side fetching

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { loadImages } from "@/lib/loadImages";

export default function AlbumPage() {
  const { album } = useParams(); // Get album name from the URL
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!album) return;

    loadImages().then((data) => {
      const filteredImages = data.filter((img) => img.Album === album);
      setImages(filteredImages);
    });
  }, [album]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">{album}</h1>

      {/* Back Button */}
      <div className="mb-4">
        <Link href="/">
          <button className="px-4 py-2 bg-gray-700 text-white rounded">
            ← Back to Albums
          </button>
        </Link>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <Image
              src={img["Image URL"]}
              alt={`Image ${index}`}
              width={300}
              height={200}
              className="rounded-md shadow-md object-cover w-full h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
