export default function FeaturedVideo() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Experience The Renegades
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Building confidence, teamwork, and champions on and off the mat.
        </p>

        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full"
          >
            <source src="/videos/renegades-highlight.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}