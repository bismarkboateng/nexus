import Header from "@/app/(home-feat)/components/Header";
import Analytics from "@/app/(home-feat)/components/Analytics";
import Influencers from "@/app/(home-feat)/components/Influencers";

export default function Home() {
  return (
    <main className="">
      <Header />

      <section className="grid grid-cols-3 gap-3">
        <Influencers />
        <Analytics />
      </section>
    </main>
  );
}
