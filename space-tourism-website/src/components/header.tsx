import { Link } from "react-router";

export function Header() {
  const navigation = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Destination",
      href: "/destination",
    },
    {
      label: "Crew",
      href: "/crew",
    },
    {
      label: "Technology",
      href: "/technology",
    },
  ];

  return (
    <header>
      <nav>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
