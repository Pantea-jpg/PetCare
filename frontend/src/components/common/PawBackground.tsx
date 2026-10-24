import "./PawBackground.css";

const paws = [
  { left: "8%", delay: "0s", duration: "14s", size: "22px" },
  { left: "24%", delay: "4s", duration: "17s", size: "28px" },
  { left: "43%", delay: "8s", duration: "15s", size: "20px" },
  { left: "61%", delay: "2s", duration: "18s", size: "26px" },
  { left: "79%", delay: "6s", duration: "16s", size: "23px" },
  { left: "92%", delay: "10s", duration: "19s", size: "20px" },
];

export default function PawBackground() {
  return (
    <div className="paw-background" aria-hidden="true">
      {paws.map((paw, index) => (
        <span
          key={index}
          className="paw-background__paw"
          style={{
            left: paw.left,
            animationDelay: paw.delay,
            animationDuration: paw.duration,
            fontSize: paw.size,
          }}
        >
          🐾
        </span>
      ))}
    </div>
  );
}
