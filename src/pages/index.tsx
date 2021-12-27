import Link from "next/link";

import {
  allMainTabs,
  getMainTabLabel,
  getMainTabQueryValue,
} from "@/consts/main-tab";
import { useMainTabQuery } from "@/hooks/main-tab";

const Page = () => {
  const mainTab = useMainTabQuery();

  return (
    <div>
      {allMainTabs.map((tab) => (
        <div key={tab}>
          <Link href={`?main-tab=${getMainTabQueryValue(tab)}`}>
            {getMainTabLabel(tab)}
          </Link>
          {tab === mainTab && "(current)"}
        </div>
      ))}
    </div>
  );
};

export default Page;
