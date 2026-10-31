
export default function ImageCard({ title, desc, tone, image, children, className = '' }) {
  const style = image ? { backgroundImage: `url(${image})` } : { background: tone };
  return (
    <article className={`icard ${className}`} style={style}>
      <div className="icard__body">
        <h3>{title}</h3>
        {desc && <p>{desc}</p>}
        {children}
      </div>
    </article>
  );
}