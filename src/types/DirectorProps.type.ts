import { StaticImageData } from "next/image";

export type DirectorProps = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
};
