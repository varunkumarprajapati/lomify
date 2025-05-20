export default function UserCard({ length = 3 }) {
  const renderCard = Array.from({ length }).map((_, key) => (
    <div
      key={key}
      className="flex items-center justify-center pl-3 py-0.5 m-1 rounded-lg bg-neutral-800"
    >
      <div className="flex-shrink-0 rounded-full size-10 bg-gradient-to-b from-neutral-700 to-neutral-600"></div>
      <div className="flex flex-col w-full p-3 py-2 gap-y-2">
        <div className="h-3 rounded-lg w-28 bg-gradient-to-b from-neutral-700 to-neutral-600"></div>
        <div className="h-3 rounded-lg w-36 bg-gradient-to-b from-neutral-700 to-neutral-600"></div>
      </div>
    </div>
  ));
  return <>{renderCard}</>;
}
