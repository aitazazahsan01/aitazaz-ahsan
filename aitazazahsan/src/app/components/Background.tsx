// app/components/Background.tsx
"use client";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <div className="absolute top-[-10%] right-[0%] w-[40vw] h-[40vh] bg-purple-600/40 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vh] bg-blue-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
    </div>
  );
}
