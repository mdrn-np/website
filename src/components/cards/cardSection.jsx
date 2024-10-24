import { data } from "../../data/data";
import CardDetail from "./cardDetail";

export default function CardSection() {
  return (
    <div>
      <section className="pb-[60px] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-center heading font-semibold my-4">About Us</h1>
            <p className="mt-2 text-md text-gray-400 block sm:hidden">
              At MDRN Nepal, we&apos;re committed to pushing the boundaries of
              learning and technology. Some of the things we do include
            </p>
            <p className="mt-2 text-md text-gray-400 hidden sm:block">
              At MDRN Nepal, we&apos;re committed to pushing the boundaries of
              learning and technology. Our club is built on the pillars of
              knowledge sharing, hands-on development, and community engagement.
              Whether it&apos;s through publishing impactful research,
              contributing to open-source projects, or volunteering for
              educational causes, we strive to make a lasting difference in the
              tech and science world.
            </p>
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
