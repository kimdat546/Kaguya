import BrowseList from "@/components/seldom/BrowseList";
import { UseBrowseOptions } from "@/hooks/useBrowse";
import React from "react";

const browseQuery: UseBrowseOptions = {
  sort: "trending",
};

const LatestPage = () => {
  return (
    <div className="py-20">
      <BrowseList title="Xu hướng hiện nay" defaultQuery={browseQuery} />
    </div>
  );
};

export default LatestPage;
