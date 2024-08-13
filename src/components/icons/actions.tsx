import { SVGComponentProps } from "@/lib/types";

type Props = SVGComponentProps & {};

export function Bookmark({
  width = 12,
  height = 14,
  className = "",
  pathStyle = "",
}: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 12 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathStyle}
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        stroke="#FFF"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function Play({
  width = 30,
  height = 30,
  className = "",
  pathStyle = "",
}: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathStyle}
        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
        fill="#FFF"
      />
    </svg>
  );
}

export function Search({
  width = 32,
  height = 32,
  className = "",
  pathStyle = "",
}: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathStyle}
        d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
        fill="#FFF"
      />
    </svg>
  );
}
