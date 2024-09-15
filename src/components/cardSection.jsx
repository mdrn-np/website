import CardDetail from "./cardDetail";


export default function CardSection(){
  return(
    <div>
      <section className=" pb-[300px] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-accent">What We Offer</h1>
              </div>
              <div className="mt-32 grid grid-cols-1 gap-8 md:grind-cols-2 lg:grid-cols-3">
                  <CardDetail title="Uno" text="Something we do"/>
                  <CardDetail title="Dos" text="Something we do"/>
                  <CardDetail title="Tres" text="Something we do"/>
              </div>
          </div>
      </section>
    </div>
  )
}