import Link from "next/link";

function Attribution() {
  return (
    <div className="absolute text-white bottom-14 px-14">
      <p>
        Challenge by <br />
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Frontend Mentor
        </Link>
      </p>

      <p>
        Coded by <br />
        <Link
          href="https://www.frontendmentor.io/profile/artimys"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Arty Simon
        </Link>
      </p>
    </div>
  );
}

export default Attribution;
