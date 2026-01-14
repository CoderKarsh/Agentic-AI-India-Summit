import React from "react";
import ComingSoon from "../components/ComingSoon";

const ComingSoonPage = () => {
  const actions = [
    { label: "Register", href: "#register", primary: true, disabled: true },
    {
      label: "Become a sponsor",
      href: "#sponsor",
      primary: false,
      disabled: true,
    },
  ];

  return (
    <div className="w-full">
      <ComingSoon
        title={"Registration & Sponsorship coming soon"}
        subtitle={
          "We're getting everything ready — please check back soon for registration and sponsorship opportunities."
        }
        actions={actions}
      />
    </div>
  );
};

export default ComingSoonPage;
