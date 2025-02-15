import Image from "next/image";
import { useState } from "react";

export default function LightHouse() {
  const [selectedImage, setSelectedImage] = useState("/assets/images/estate.jpeg");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [
    "/assets/images/estate.jpeg",
    "/assets/images/estate.jpeg",
    "/assets/images/estate.jpeg",
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <section className="w-full grid grid-cols-5 gap-4">
      <div className="col-span-4">
        <Image
          src={selectedImage}
          width={1000}
          height={1000}
          alt="generate estate"
          className="rounded-xl cursor-pointer h-full"
          onClick={() => setIsLightboxOpen(true)}
        />
      </div>

      <div className="col-span-1 flex flex-col gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image)}
            className="cursor-pointer"
          >
            <Image
              src={image}
              width={130}
              height={130}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-3xl w-[200px] h-[100px] object-center"
            />
          </div>
        ))}
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              width={1200}
              height={800}
              alt="Lightbox Image"
              className="rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}