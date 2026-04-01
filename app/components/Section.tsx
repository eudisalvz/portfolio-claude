interface SectionProps {
  label: string;
  id?: string;
  children: React.ReactNode;
}

export default function Section({ label, id, children }: SectionProps) {
  return (
    <div id={id} className="flex flex-col gap-2.5">
      <span className="text-white text-[12px] leading-5">{label}</span>
      <div className="text-[#9E9E9E] text-[12px] leading-5">{children}</div>
    </div>
  );
}
