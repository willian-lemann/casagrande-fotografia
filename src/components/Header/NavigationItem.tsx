import Link from "next/link";

type NavigationItemProps = {
  label: string;
  href: string;
};
export function NavigationItem({ href, label }: NavigationItemProps) {
  return (
    <li key={label} className="text-lg font-nunito">
      <Link href={`/${href}`}>{label}</Link>
    </li>
  );
}
