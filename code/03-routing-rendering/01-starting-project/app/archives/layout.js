export default function ArchiveLayout({ archives, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archives}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
