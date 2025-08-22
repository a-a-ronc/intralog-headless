
export const metadata = { title: "Videos | Intralog" };

const videos = [
  { title: "Pallet Shuttle Overview", url: "https://www.youtube.com/embed/BF7HCTcsN2s" },
  { title: "Modula FlexiBox Overview", url: "https://www.youtube.com/embed/H5GIY7PTyR0" },
  { title: "Conveyor — AutoRoll+ MDR", url: "https://www.youtube.com/embed/jf3IbA9pigs" },
  { title: "Conveyor — Belt", url: "https://www.youtube.com/embed/zyoootwqbqA" },
  { title: "Conveyor — Gravity", url: "https://www.youtube.com/embed/4GX7exZGpmQ" },
  { title: "Conveyor — NBLR", url: "https://www.youtube.com/embed/E5BwPlU46QQ" },
  { title: "Conveyor — V‑Belt", url: "https://www.youtube.com/embed/iOdUktCFxiY" },
  { title: "AMR — SEER", url: "https://www.youtube.com/embed/zlMDJpZYtmY" },
  { title: "AMR Sortation — Tompkins", url: "https://www.youtube.com/embed/VhG82W2qQwI" },
  { title: "ACR — HAI Robotics", url: "https://www.youtube.com/embed/7x0Zq7y0CkQ" },
];

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-4">Video Library</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div key={v.url} className="card">
              <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={v.url}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="mt-2 font-medium">{v.title}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
