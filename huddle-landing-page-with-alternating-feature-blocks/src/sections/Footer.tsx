const footerContent = [
  {
    title: "Huddle",
    description:
      "Huddle reimagines community building by giving both you and your audience a voice. Foster connections through genuine discussions.",
    contact: [
      {
        type: "phone",
        value: "+1-543-123-4567",
      },
      {
        type: "email",
        value: "example@huddle.com",
      },
    ],
    links: ["About Us", "What We Do", "FAQ", "Career", "Blog", "Contact Us"],
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-white py-12 px-6">
        {footerContent.map((section, index) => (
          <div key={index} className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-bold">{section.title}</h2>
            <p className="mt-2 mb-4">{section.description}</p>
            <div className="mt-4">
              {section.contact.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <span className="text-sm">
                    {item.type === "phone" ? "📞" : "✉️"}
                  </span>
                  <p className="text-sm">{item.value}</p>
                </div>
              ))}
            </div>
            <ul className="mt-4 space-y-2">
              {section.links.map((link, i) => (
                <li key={i} className="text-sm hover:underline">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
