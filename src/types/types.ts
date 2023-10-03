import { StaticImageData } from "next/image";

export type UserProps = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
};
