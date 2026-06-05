export default function UtilityBar() {
  return (
    <div className="utility" role="region" aria-label="Site notice">
      <div className="utility-inner">
        <div className="utility-left">
          <span className="pulse" aria-hidden="true" />
          <span>
            Winter 2026 open —{' '}
            <strong style={{ color: '#fff' }}>Verbier, Zermatt &amp; Val d&apos;Isère now booking</strong>
          </span>
        </div>
        <div className="utility-right">
          <a href="#">Support</a>
          <span className="util-sep" aria-hidden="true" />
          <a href="#">USD</a>
          <span className="util-sep" aria-hidden="true" />
          <a href="#">English</a>
        </div>
      </div>
    </div>
  )
}
