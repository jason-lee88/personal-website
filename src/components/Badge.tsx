type BadgeProps = {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => (
  <div className="bg-sky-900/40 text-sky-200 font-medium rounded-full px-4 py-1">
    {children}
  </div>
)

export default Badge;