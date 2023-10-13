import ThirdLayerItem from "./ThirdLayerItem";

function Third() {
  return (
    <section className="flex max-[1125px]:flex max-[1125px]:flex-col">
      <ThirdLayerItem
        background="bg-[url('/images/desktop/image-graphic-design.jpg')]"
        header="Graphic Design"
        content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        font="text-footerText"
      />
      <ThirdLayerItem
        background="bg-[url('/images/desktop/image-photography.jpg')]"
        header="Photography"
        content="Increase your credibility by getting the most stunning, high-quality
        photos that improve your business image."
        font="text-thirdText"
      />
    </section>
  );
}

export default Third;
