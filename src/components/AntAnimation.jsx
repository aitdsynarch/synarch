import React from "react";

export default function AntAnimation() {
  return (
    <div className="relative h-28 w-full overflow-hidden">
      <style>{`
        .moving-ant {
          position: absolute;
          top: 50%;
          left: 0;
          width: 110px;
          height: auto;
          object-fit: contain;
          animation: antMove 40s linear infinite;
          will-change: left, transform;
        }

        @keyframes antMove {
          0% {
            left: 0;
            transform: translateY(-50%) scaleX(1);
          }

          49% {
            left: calc(100% - 110px);
            transform: translateY(-50%) scaleX(1);
          }

          50% {
            left: calc(100% - 110px);
            transform: translateY(-50%) scaleX(-1);
          }

          99% {
            left: 0;
            transform: translateY(-50%) scaleX(-1);
          }

          100% {
            left: 0;
            transform: translateY(-50%) scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .moving-ant {
            animation: none;
          }
        }
      `}</style>

      <img
        src="/images/antsani.gif"
        alt="SYNARCH Ant"
        className="moving-ant"
      />
    </div>
  );
}