import { usePathname, useSearchParams } from "next/navigation";

type paramsToSet = {
  label: string;
  data: string | number;
};

export function useGenerateNavLink(paramsToSet: paramsToSet[]) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  paramsToSet.forEach((param) =>
    params.set(
      param.label,
      typeof param.data === "string" ? param.data : param.data.toString(),
    ),
  );

  return `${pathname}?${params.toString()}`;
}
