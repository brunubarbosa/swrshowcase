import { useState } from "react";
import useProfile from "../../hooks/useProfile";

export const Header = () => {
  const [shouldValidate, setShouldValidate] = useState(false);
  useProfile(1, {
    revalidateIfStale: shouldValidate,
    revalidateOnFocus: shouldValidate,
  });
  return (
    <div>
      <button onClick={() => setShouldValidate((should) => !should)}>
        should revalidate on header call
      </button>
      {`revalidateIfStale = ${shouldValidate} `}
    </div>
  );
};

export default Header;
