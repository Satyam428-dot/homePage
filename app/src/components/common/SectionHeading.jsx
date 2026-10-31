
export default function SectionHeading({ lead, accent, id }) {
  return (
    <h2 className="heading" id={id}>
      <span>{lead}</span> <span className="heading__accent">{accent}</span>
    </h2>
  );
}