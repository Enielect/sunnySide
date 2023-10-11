import ThirdLayerItem from "./ThirdLayerItem";

function Third() {
  return (
    <section className="flex ">
      <ThirdLayerItem
        background="bg-[url('/images/desktop/image-graphic-design.jpg')]" header="Graphic design"
        content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <ThirdLayerItem
      
        background="bg-[url('/images/desktop/image-photography.jpg')]"
        header="Photography"
        content="Increase your credibility by getting the most stunning, high-quality
        photos that improve your business image."
      />
    </section>
  );
}

export default Third;
