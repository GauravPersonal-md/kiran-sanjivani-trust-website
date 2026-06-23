import Image from "next/image";
import { donationDetails } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "h-28 w-28",
  md: "h-36 w-36",
  lg: "h-48 w-48",
};

interface DonationQrImageProps {
  size?: keyof typeof sizeMap;
  className?: string;
}

export function DonationQrImage({ size = "md", className }: DonationQrImageProps) {
  const { qrImage, qrAlt } = donationDetails.upi;

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-sm",
        sizeMap[size],
        className
      )}
    >
      <Image
        src={qrImage}
        alt={qrAlt}
        fill
        className="object-contain p-1.5"
        sizes="(max-width: 640px) 112px, 192px"
      />
    </div>
  );
}
