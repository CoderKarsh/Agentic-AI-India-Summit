import React from "react";
import ComingSoon from "../components/ComingSoon";

const ComingSoonPage = () => {
  const actions = [
    { label: "Back to Home", href: "/", primary: true, disabled: false },
  ];

  return (
    <div className="w-full">
      <ComingSoon
        title={"Coming soon"}
        subtitle={"We're getting everything ready — please check back soon."}
        actions={actions}
      />
    </div>
  );
};

export default ComingSoonPage;
