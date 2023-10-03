import { StaticImageData } from "next/image";

export type SuccessStoriesProps = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
};
