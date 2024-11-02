import { addSpacesToPhoneNumber } from "~/lib/utils";
import { Contact } from "~/types";
import { Button } from "./ui/button";

export default function InfoOverlay(props: Contact) {
  return (
    <section id="contact" className=" tablet:px-4">
      <div className="bg-white rounded-lg shadow-2xl p-4 tablet:p-8 w-11/12 tablet:max-w-4xl mx-auto absolute translate-x-1/2 tablet:left-1/2 right-1/2 -translate-y-1/2 tablet:-translate-y-1/2 tablet:-translate-x-1/2  ">
        <h2 className="text-2xl tablet:text-3xl font-bold text-center mb-4">
          {props.header}
        </h2>

        <p className="text-center mb-8">{props.paragraph}</p>

        <div className="flex flex-col tablet:flex-row gap-4">
          <Button asChild className="w-full">
            <a href={`tel:+222${props.phoneNumber}`}>
              Appelez : +222 {addSpacesToPhoneNumber(props.phoneNumber)}
            </a>
          </Button>

          <Button asChild className="w-full">
            <a href={`mailto:${props.email}`}>Email : {props.email}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
