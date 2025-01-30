import PropertyCard from "@/app/(property)/components/property-card/property-card";
import PropertyDetail from "@/app/(property)/components/property-detail/property-detail";

export default function Page() {
  return (
    <section className="w-full h-full grid grid-cols-5 gap-14 mt-1">
      <div className="col-span-2 flex flex-col gap-3">
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <PropertyCard key={item} />
      ))}
      </div>
      <PropertyDetail />
    </section>  
  )
}