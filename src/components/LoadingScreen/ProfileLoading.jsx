export default function ProfileLoading() {
  return (
    <div className="flex items-center justify-center px-6 py-3">
      <div className="flex-shrink-0 rounded-full size-14 bg-neutral-700 animate-pulse"></div>
      <div className="flex flex-col w-full py-2 pl-3 pr-3 gap-y-2">
        <div className="w-40 h-4 rounded-lg bg-neutral-700 animate-pulse"></div>
        <div className="w-48 h-4 rounded-lg bg-neutral-700 animate-pulse"></div>
      </div>
    </div>
  );
}
