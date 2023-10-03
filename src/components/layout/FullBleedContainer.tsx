function FullBleedContainer({
  classNames,
  children,
}: {
  classNames: string;
  children: React.ReactNode;
}) {
  return <div className={classNames}>{children}</div>;
}

export default FullBleedContainer;
