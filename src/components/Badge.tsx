type BadgeProps = {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => (
  <div className="bg-neutral-500/40 text-neutral-50 rounded-full px-3 py-1">
    {children}
  </div>
)

export default Badge;