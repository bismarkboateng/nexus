export type HeadlineProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};
export default function Headline({
  variant,
  children,
  className = "",
}: HeadlineProps) {
  const Tag = variant as keyof JSX.IntrinsicElements;
  return <Tag className={`font-bold ${className}`}>{children}</Tag>;
}
