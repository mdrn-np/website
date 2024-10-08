import { data } from "../../data/data";
import CardDetail from "./cardDetail";

export default function CardSection() {
  return (
    <div>
      <section className="pb-[60px] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-accent">
              What We Offer
            </h1>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <CardDetail
                key={item.id}
                title={item.title}
                text={item.text}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
