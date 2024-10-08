import SponserDetail from "./sponserDetail";

export default function Sponsers() {
  return (
    <section className="pb-[300px] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-[3rem] font-medium text-gray-600">
            Interested In Sponsering Us?
          </h1>
          <p className="text-gray-400">Here are the benifits !</p>
          <SponserDetail />
        </div>
      </div>
    </section>
  );
}
