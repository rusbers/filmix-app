export function InputAvatar() {
  return (
    <input
      className="text- cursor-pointer file:mr-4 file:cursor-pointer file:rounded-full file:border-2 file:border-solid file:border-stone-100 file:bg-app-semidark-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-stone-100 file:transition-colors hover:file:border-stone-300 hover:file:text-stone-300 file:active:opacity-50"
      name="avatarUrl"
      type="file"
    />
  );
}
