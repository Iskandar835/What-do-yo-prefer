export default function Button({
  onClick,
  title,
}: {
  onClick: () => void;
  title: string;
}) {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
}
