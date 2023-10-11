function Footer() {
  return (
    <footer className="bg-footer h-64 text-center py-10">
      <strong className="text-footerText    text-center text-2xl">
        sunnyside
      </strong>
    <List elements={['About', 'Projects', 'Services']} padding='pt-10' />
      
      <ul className=" flex justify-around text-footerText pt-20 mx-auto w-2/12">
        <li><img src="images/icon-facebook.svg" alt="instagram icon" /></li>
        <li><img src="images/icon-instagram.svg" alt="instagram icon" /></li>
        <li><img src="images/icon-twitter.svg" alt="instagram icon" /></li>
        <li><img src="images/icon-pinterest.svg" alt="instagram icon" /></li>
      </ul>
    </footer>
  );
}


function List({ elements, padding }) {
  return (
    <ul className={`flex justify-around text-footerText   mx-auto w-3/12 ${padding}`}>
      {elements.map((e) => (
        <li key="e">{e}</li>
      ))}
    </ul>
  );
}

export default Footer;
