import CaptureForm from "./capture-form";

export default function Capture() {
  return (
    <section className="mt-20">
      <h1 className="text-xl font-bold text-center mb-2">
        Page to capture lead.
      </h1>
      <section className="w-[40%] mx-auto mt-2">
       <CaptureForm />
      </section>
    </section>
  );
}
