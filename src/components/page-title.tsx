export function PageTitle({ title }: { title: string }) {
  return (
    <div className="w-full text-clip bg-background py-20 sm:py-40">
      <h1 className="mt-5 text-center text-4xl font-extrabold leading-[1.15]">
        {title}
      </h1>
    </div>
  );
}
