type Props =
  | {
      isCustomSize?: undefined;
      className?: undefined;
      pathStyle?: string;
    }
  | { isCustomSize: boolean; className: string; pathStyle?: string };

export default function Logo({
  isCustomSize = false,
  className = "w-[1.5625rem] h-[1.25rem] md:w-[2.0625rem] md:h-[1.6875rem]",
  pathStyle = "",
  ...props
}: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 33 27"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={pathStyle}
        d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
        fill="#FC4747"
      />
    </svg>
  );
}
