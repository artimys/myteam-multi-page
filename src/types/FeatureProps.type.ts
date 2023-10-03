import { StaticImageData } from "next/image";

export type FeatureProps = {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
};
