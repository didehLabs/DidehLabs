interface SectionHeadingProps {
  subtitle?: string
  title: string
  description?: string
  centered?: boolean
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-4xl space-y-4 ${centered ? 'mx-auto text-center' : ''}`}>
      {subtitle && <p className="eyebrow">{subtitle}</p>}
      <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-3xl pt-1 text-base leading-relaxed text-muted-foreground sm:text-lg ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
