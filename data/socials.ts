import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

export type SocialLink = {
  name: string;
  href: string;
  icon: any; // using any to bypass strict typing
};

export const socials: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/denbiz",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@denbiz",
    icon: TikTokIcon,
  },
];
