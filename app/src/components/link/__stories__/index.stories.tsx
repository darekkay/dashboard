import React from "react";

import Icon from "components/icon";

import Link from "../index";

export default {
  title: "Components/Link",
};

export const Variants = () => {
  return (
    <>
      <div>
        <Link href="/" external={false}>
          Regular Link
        </Link>
      </div>
      <div>
        <Link href="https://example.com" external>
          External Link
        </Link>
      </div>
      <div>
        <Link href="https://example.com" external>
          Icon Link <Icon name="cog" position="right" />
        </Link>
      </div>
    </>
  );
};
