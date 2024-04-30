const Terms = ({
  items,
  title,
  date,
}: {
  items: {
    title: string;
    content: string;
  }[];
  title: string;
  date: string;
}) => {
  const formatContent = (content: string) => {
    return { __html: content };
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4  text-tertiary ">{title}</h1>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <ol className="list-decimal pl-5 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="ml-4">
            <h2 className="text-xl font-semibold">{item.title}</h2>

            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={formatContent(item.content)}
            ></p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export { Terms };
