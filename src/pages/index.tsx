import { MESSAGE } from "@/consts";
import { getMainTabLabel } from "@/consts/main-tab";
import { useMainTabQuery } from "@/hooks/main-tab";

const Page = () => {
  const mainTab = useMainTabQuery();

  return (
    <h1>
      {MESSAGE}, {getMainTabLabel(mainTab)}
    </h1>
  );
};

export default Page;
