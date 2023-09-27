import AvatarNikita from "../../../../public/images/avatar-nikita.jpg";
import AvatarCristian from "../../../../public/images/avatar-christian.jpg";
import AvatarCruz from "../../../../public/images/avatar-cruz.jpg";
import AvatarDrake from "../../../../public/images/avatar-drake.jpg";
import AvatarGriffin from "../../../../public/images/avatar-griffin.jpg";
import AvatarAden from "../../../../public/images/avatar-aden.jpg";
import MeetDirectorItem from "@/components/about/meet-directors/MeetDirectorItem";

function MeetDirectorsGrid({ props, children }) {
  const directors = [
    {
      id: 1,
      name: "Nikita Marks",
      role: "Founder & CEO",
      image: AvatarNikita,
      quote:
        "It always amazes me how much talent there is in every corner of the globe.",
    },
    {
      id: 2,
      name: "Cristian Duncan",
      role: "Co-founder & COO",
      image: AvatarCristian,
      quote:
        "Distributed teams required unique processes. You need to approach work in a new way.",
    },
    {
      id: 3,
      name: "Cruz Hamer",
      role: "Co-founder & CTO",
      image: AvatarCruz,
      quote:
        "Technology is at the forefront of enabling distributed teams. That's where we come in.",
    },
    {
      id: 4,
      name: "Drake Heaton",
      role: "Business Development Lead",
      image: AvatarDrake,
      quote:
        "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
    },
    {
      id: 5,
      name: "Griffin Wise",
      role: "Lead Marketing",
      image: AvatarGriffin,
      quote:
        "Unique perspectives shape unique products, which is what you need to survive these days.",
    },
    {
      id: 6,
      name: "Aden Allan",
      role: "Head of Talent",
      image: AvatarAden,
      quote:
        "Empowered teams create truly amazing products. Set the north star and let them follow it.",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto
                gap-14 md:px-12 sm:gap-x-3 sm:gap-y-16 lg:gap-x-7 lg:gap-y-20"
    >
      {directors.map((director) => {
        return <MeetDirectorItem key={director.key} director={director} />;
      })}
    </div>
  );
}

export default MeetDirectorsGrid;
