export type TimelineItem = {
  title: string;
  org: string;
  place?: string;
  period?: string;
  note?: string;
  current?: boolean;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.title + item.org} className={`tl-item${item.current ? " is-current" : ""}`}>
          {(item.period || item.current) && (
            <span className="tl-period">
              {item.period}
              {item.current && <span className="tl-live">Current</span>}
            </span>
          )}
          <h4>{item.title}</h4>
          <p className="tl-org">{item.org}</p>
          {(item.place || item.note) && (
            <p className="muted">{[item.place, item.note].filter(Boolean).join(" · ")}</p>
          )}
        </li>
      ))}
    </ol>
  );
}
