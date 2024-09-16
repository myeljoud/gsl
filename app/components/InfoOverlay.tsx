export default function InfoOverlay() {
  return (
    <section id="contact" className="relative px-4 py-8 tablet:py-0">
      <div className="bg-white rounded-lg shadow-2xl p-4 tablet:p-8 max-w-4xl mx-auto tablet:absolute tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2">
        <h2 className="text-2xl tablet:text-3xl font-bold text-center mb-4">Besoin de plus d'informations ?</h2>
        <p className="text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div className="flex flex-col tablet:flex-row gap-4">
          <button className="bg-primary text-white py-3 px-4 flex-1 text-sm tablet:text-base">Appelez : +222 33 33 33 33</button>
          <button className="bg-primary text-white py-3 px-4 flex-1 text-sm tablet:text-base">Email : someemail@example.com</button>
        </div>
      </div>
    </section>
  )
}