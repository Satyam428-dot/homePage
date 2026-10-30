export default function Logo({ large = false }) {
  return (
    <a href="#home" className={`inline-flex flex-col leading-tight ${large ? 'items-center' : ''}`} aria-label="Rental Home">
      <span className={`font-bold tracking-tight text-[var(--blue)] ${large ? 'text-[56px]' : 'text-2xl'}`}>Rental Home</span>
      <span className={`font-semibold text-[var(--yellow)] ${large ? 'mt-1 text-[18px] tracking-[1px]': 'text-[8px]'}`}>Your Trusted Partner in Business</span>
    </a>
  );
}