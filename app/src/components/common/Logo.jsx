export default function Logo({ large = false }) {
  return (
    <a href="#home" className={`logo ${large ? 'logo--lg' : ''}`} aria-label="Rental Business">
      <span className="logo__name">Rental Business</span>
      <span className="logo__tag">Your Trusted Partner</span>
    </a>
  );
}