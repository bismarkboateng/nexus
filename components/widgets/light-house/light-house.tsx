import Image from "next/image";

export default function LightHouse() {
  return (
    <section className="grid grid-cols-5 gap-0">
      <Image
        src="/assets/images/estate.jpeg"
        width={1000}
        height={1000}
        alt="generate estate"
        className="col-span-3 rounded-xl"
      />
      <div className="col-span-2 flex flex-col gap-2">
        <Image
          src="/assets/images/estate.jpeg"
          width={108}
          height={108}
          alt="generate estate"
          className="col-span-3 rounded-md"
        />
        <Image
          src="/assets/images/estate.jpeg"
          width={108}
          height={108}
          alt="generate estate"
          className="col-span-3 rounded-md"
        />
        <Image
          src="/assets/images/estate.jpeg"
          width={108}
          height={108}
          alt="generate estate"
          className="col-span-3 rounded-md"
        />
      </div>
    </section>
  );
}
