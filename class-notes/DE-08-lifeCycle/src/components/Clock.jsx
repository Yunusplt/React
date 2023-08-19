import moment from "moment";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const times = setInterval(() => {
      setTime(moment());
      console.log("merhaba");
    }, 1000);

    return () => {
      clearInterval(times);
      console.log("baska sayfayay gidildigi icin setInterval was stopped");
    };

    //! sayfa ilk render edildiginde setInterval baslasin
  }, []);

  return (
    <div>
      {time.format("HH")}
      {time.format("ss") % 2 === 0 ? ":" : " "}
      {time.format("mm")}
      {time.format("ss") % 2 === 0 ? ":" : " "}
      {time.format("ss")}
    </div>
  );
};

export default Clock;
