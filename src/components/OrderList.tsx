interface ItemListaProps {
  id: string;
  texto: string;
}

const ItemList: React.FC<ItemListaProps> = ({ id, texto }) => (
  <li>
    <a href={`#${id}`} className="no-underline text-tertiary">
      {texto}
    </a>
  </li>
);

interface ListaOrdenadaProps {
  data: { id: string; texto: string }[];
}

const OrderList: React.FC<ListaOrdenadaProps> = ({ data }) => (
  <ol className="font-bold mx-3 mb-10 flex flex-col list-decimal">
    {data.map((item) => (
      <ItemList key={item.id} id={item.id} texto={item.texto} />
    ))}
  </ol>
);

export { OrderList };
