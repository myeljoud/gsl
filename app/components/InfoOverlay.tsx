import { Contact } from "~/types"
export default function InfoOverlay(props: Contact) {
  return (
    <section id="contact" className="relative px-4 py-8 tablet:py-0">
      <div className="bg-white rounded-lg shadow-2xl p-4 tablet:p-8 max-w-4xl mx-auto tablet:absolute tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2">
        <h2 className="text-2xl tablet:text-3xl font-bold text-center mb-4">{props.header}</h2>
        <p className="text-center mb-8">{props.paragraph}</p>
        <div className="flex flex-col tablet:flex-row gap-4">
          <a href="tel:" className="bg-primary text-white py-3 px-4 flex-1 text-sm text-center tablet:text-base">{props.phoneNumber}</a>
          <a href="mailto:+22233333333" className="bg-primary text-white py-3 px-4 flex-1 text-sm text-center tablet:text-base">{props.email}</a>
        </div>
      </div>
    </section>
  )
}
