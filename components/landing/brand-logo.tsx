import Image from "next/image";

type BrandLogoProps = {
  light?: boolean;
  compact?: boolean;
};

export function BrandLogo({ light = true, compact = false }: BrandLogoProps) {
  return (
    <span className="flex items-center gap-3">
      <span className="brand-mark relative block h-9 w-9 shrink-0 overflow-hidden">
        <Image
          src="/flowrix-logo-icon.png"
          alt=""
          fill
          sizes="36px"
          priority
          className="scale-[3.35] object-contain"
        />
      </span>
      {!compact ? (
        <span
          className={`text-[15px] font-semibold tracking-[-0.01em] ${
            light ? "text-white" : "text-slate-950"
          }`}
        >
          Flowrix <span className="font-normal opacity-55">Solutions</span>
        </span>
      ) : null}
    </span>
  );
}
