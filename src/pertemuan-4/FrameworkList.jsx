import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-10">
      
      <h1 className="text-3xl font-bold text-center text-purple-400 mb-8 tracking-widest">
        ⚡ FRAMEWORK DATABASE ⚡
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="relative p-5 rounded-2xl border border-purple-500/30 
            bg-white/5 backdrop-blur-lg 
            shadow-[0_0_20px_rgba(168,85,247,0.3)] 
            hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
            hover:-translate-y-2 
            transition-all duration-300 group"
          >
            
            {/* Glow background effect */}
            <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

            {/* Title */}
            <h2 className="text-xl font-bold text-purple-300 mb-2 group-hover:text-purple-400">
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-3">
              {item.description}
            </p>

            {/* Developer */}
            <p className="text-gray-400 text-sm mb-2">
              Developed by:{" "}
              <span className="text-cyan-400 font-semibold">
                {item.details.developer}
              </span>
            </p>

            {/* Website button */}
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-1 text-sm 
              bg-gradient-to-r from-purple-600 to-cyan-500 
              text-white rounded-full 
              shadow-md hover:scale-105 
              hover:shadow-[0_0_15px_#22d3ee] 
              transition"
            >
              🚀 Visit Website
            </a>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full 
                  bg-purple-500/20 text-purple-300 
                  border border-purple-500/30
                  hover:bg-purple-500/40 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}