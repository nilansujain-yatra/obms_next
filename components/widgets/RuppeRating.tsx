export default function RupeeRating({ value, max = 4 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <img
          key={i}
          src={
            i < value
              ? "/images/ruppe_primary.png"   // Highlighted rupee (red)
              : "/images/ruppe_grey.png"      // Grey rupee
          }
          className="w-3 h-3 object-contain"
          alt="rupee rating"
        />
      ))}
    </div>
  );
}
