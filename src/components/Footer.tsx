const Footer = () =>
<footer className="bg-background pb-8 pt-6">
    <div className="container mx-auto px-4 text-center">
      <p
      className="mb-2 font-sans italic text-secondary-foreground bg-primary-foreground mx-[20px] text-center font-normal text-lg"
      style={{ fontSize: "15px", fontWeight: 500 }}>

        "Mastering the systems behind your success, so you have the freedom to follow your passion."
      </p>
      <p
      className="text-muted-foreground/60"
      style={{ fontSize: "13px" }}>

        © {new Date().getFullYear()} Jhezreel Suarez. All rights reserved.
      </p>
    </div>
  </footer>;


export default Footer;