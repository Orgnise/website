interface Props {
  children: React.ReactNode[];
}
export default function ChangeLogList({ children }: Props) {
  return (
    <div className="mx-auto max-w-screen-lg divide-y divide-gray-200">
      {children}
    </div>
  );
}
