export default function Message({ id, content }) {
  return (
    <div className="flex items-center justify-end w-full h-16 p-6">
      <div className="px-4 py-2 text-white bg-black bg-primary-500 rounded-3xl">
        {content}
      </div>
    </div>
  );
}
