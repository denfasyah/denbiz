export default function Loading() {
  return (
    <div className="pt-44 pb-24 px-4 md:px-8 max-w-6xl mx-auto min-h-screen">
      <div className="animate-pulse space-y-12">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <div className="h-4 bg-gray-200 rounded-full w-24 mx-auto" />
          <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto" />
          <div className="h-4 bg-gray-200 rounded-full w-1/2 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 h-64 rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
