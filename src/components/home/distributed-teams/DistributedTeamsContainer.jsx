import DistributedTeamsItem from "@/components/home/distributed-teams/DistributedTeamsItem";
import IconPerson from "../../../../public/images/icon-person.svg";
import IconCog from "../../../../public/images/icon-cog.svg";
import IconChart from "../../../../public/images/icon-chart.svg";

function DistributedTeamsContainer() {
  const features = [
    {
      id: 1,
      title: "Experienced Individuals",
      description:
        "Our network is made up of highly experienced professionals who are passionate about what they do.",
      icon: IconPerson,
    },
    {
      id: 2,
      title: "Easy to Implement",
      description:
        "Our processes have been refined over years of implementation meaning our teams always deliver.",
      icon: IconCog,
    },
    {
      id: 3,
      title: "Enhanced Productivity",
      description:
        "Our customized platform with in-built analytics helps you manage your distributed teams.",
      icon: IconChart,
    },
  ];

  return (
    <div className="space-y-12 mt-14 lg:mt-10 text-primary-white">
      {features.map((feature) => {
        return <DistributedTeamsItem key={feature.id} feature={feature} />;
      })}
    </div>
  );
}

export default DistributedTeamsContainer;
