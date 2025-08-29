import "./styles.css";

type ChoiceCardProps = {
  imgSource: string;
  imgAlt: string;
  text: string;
};

export default function ChoiceCard({
  imgSource,
  imgAlt,
  text,
}: ChoiceCardProps) {
  return (
    <div className="choice-card">
      <img src={imgSource} alt={imgAlt} />
      <p className="choice-card__label">{text}</p>
    </div>
  );
}
