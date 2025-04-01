import { FacebookIcon, InstagramIcon, TwitterIcon } from "./icons";

export function Footer() {
  const contacts = [
    {
      icon: "/images/icon-location.svg",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet excepturi debitis ratione quaerat dignissimos animi quae. Ipsa, blanditiis perferendis?",
    },
    {
      icon: "/images/icon-phone.svg",
      label: "+1-543-123-4567",
    },
    {
      icon: "/images/icon-email.svg",
      label: "example@fylo.com",
    },
  ];

  const navigation = [
    {
      label: "About us",
    },
    {
      label: "What we do",
    },
    {
      label: "FAQ",
    },
    {
      label: "Career",
    },
    {
      label: "Blog",
    },
    {
      label: "Contact us",
    },
  ];

  const socialMedias = [
    {
      icon: <FacebookIcon />,
    },
    {
      icon: <TwitterIcon />,
    },
    {
      icon: <InstagramIcon />,
    },
  ];

  return (
    <footer className="px-6 py-3 lg:px-12 lg:py-6 mt-28 bg-foreground text-white">
      <h2 className="my-6 font-bold text-2xl">Moodle</h2>
      <ul className="space-y-6">
        {contacts.map((contact, index) => (
          <li className="flex gap-5" key={index}>
            <img src={contact.icon} alt={contact.label} className="size-5" />
            <span>{contact.label}</span>
          </li>
        ))}
      </ul>
      <ul className="my-6 space-y-6">
        {navigation.map((item) => (
          <li>
            <a href="#" className="hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center gap-x-5">
        {socialMedias.map((item) => (
          <li className="border rounded-full p-2">
            <a href="#" className="text-sm">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-center mt-7">
        © Copyright 2018 Huddle. All rights reserved
      </p>
    </footer>
  );
}
