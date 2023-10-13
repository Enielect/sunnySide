import Card from "./Card";

function Forth() {
  return (
    <section className="py-24">
      <p className="text-center  pt-10 pb-20 font-youngSerif text-xl tracking-widestt font-bold opacity-30">
        CLIENT TESTIMONIALS
      </p>
      <div className="container mx-auto px-44 flex gap-8 justify-around max-[1125px]:flex max-[1125px]:flex-col  max-[1125px]:px-36">
        <Card
          image="./images/image-emily.jpg"
          content="We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit."
          name="Emily R."
          role="Marketing Director"
        />
        <Card
          image="./images/image-jennie.jpg"
          content="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          role=" Business Owner"
        />
        <Card
          image="./images/image-thomas.jpg"
          content="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          role="Chief Operating Officer"
        />
      </div>
    </section>
  );
}

export default Forth;
