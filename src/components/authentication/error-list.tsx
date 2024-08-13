export function ErrorList({ errors }: { errors: string[] | undefined }) {
  return (
    errors && (
      <ul className="mt-2 pl-4 text-xs text-red-500">
        {errors.map((error, i) => (
          <li className="list-disc" key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  );
}
