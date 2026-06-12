function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="section-header">
      <span className="section-header__label">{label}</span>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
