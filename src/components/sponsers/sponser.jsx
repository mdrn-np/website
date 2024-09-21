import SponserDetail from "./sponserDetail";

export default function Sponsers() {
  return (
    <section className="pb-16 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-medium text-gray-600">
            Interested In Sponsoring Us?
          </h1>
          <p className="text-gray-400">Here's how our sponsers benifit : </p>
          <SponserDetail />
        </div>
      </div>
    </section>
  );
}
