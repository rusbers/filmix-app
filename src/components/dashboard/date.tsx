"use client";

import { useEffect, useState } from "react";

export function DateInfo({ date }: { date: Date }) {
  const [convertedDate, setConvertedDate] = useState("");

  useEffect(() => {
    setConvertedDate(new Date(date).toLocaleDateString());
  }, [date]);

  return <>{convertedDate}</>;
}
