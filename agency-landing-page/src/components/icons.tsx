function ArrowDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="114">
      <g
        stroke="#FFF"
        strokeWidth="6"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 3v100M3 95.484l15 15 15-15" />
      </g>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
      <path
        d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export { ArrowDown, CloseIcon, MenuIcon };
