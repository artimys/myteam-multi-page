import AvatarKady from "../../../../public/images/avatar-kady.jpg";
import AvatarAiysha from "../../../../public/images/avatar-aiysha.jpg";
import AvatarArthur from "../../../../public/images/avatar-arthur.jpg";

import SuccessStoriesItem from "@/components/home/success-stories/SuccessStoriesItem";

import { SuccessStoriesProps } from "@/types/SuccessStoriesProps.type";

function SuccessStoriesContainer() {
  const successStories: SuccessStoriesProps[] = [
    {
      id: 1,
      quote:
        "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
      name: "Kady Baker",
      role: "Product Manager at Bookmark",
      image: AvatarKady,
    },
    {
      id: 2,
      quote:
        "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
      name: "Aiysha Reese",
      role: "Founder of Manage",
      image: AvatarAiysha,
    },
    {
      id: 3,
      quote:
        "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
      name: "Arthur Clarke",
      role: "Co-founder of MyPhysio",
      image: AvatarArthur,
    },
  ];

  return (
    <div className="flex flex-col gap-y-14 mt-14 sm:px-16 lg:space-x-14 lg:flex-row lg:px-0 max-w-[1110px] mx-auto">
      {successStories.map((story) => {
        return <SuccessStoriesItem key={story.id} {...story} />;
      })}
    </div>
  );
}

export default SuccessStoriesContainer;
