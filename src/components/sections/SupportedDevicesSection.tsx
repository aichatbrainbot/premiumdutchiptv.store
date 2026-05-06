export function SupportedDevicesSection() {
  const devices = [
    { name: "Smart TV", desc: "Samsung, LG, Android TV" },
    { name: "Smartphones", desc: "iOS & Android apparaten" },
    { name: "TV Boxes", desc: "Apple TV, MAG, Formuler" },
    { name: "PC & Mac", desc: "Windows, macOS, Linux" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-blue-950/20 border-y border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Kijk Op Elk Apparaat</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
          {devices.map((device, i) => (
            <div key={i} className="flex-1 min-w-[200px] p-6 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-sm">
              <div className="font-bold text-lg text-white mb-2">{device.name}</div>
              <div className="text-sm text-gray-400">{device.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
