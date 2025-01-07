import Image from "next/image";
import Text from "./text";

export default function Logo() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 mb-3">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={20}
          height={20}
        />
        <Text className="font-bold">Nexus</Text>
      </div>
    </>
  );
}
