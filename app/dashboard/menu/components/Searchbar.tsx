interface Props {
  query: string | undefined;
  onQueryChange: (query: string) => void;
}

export default function Searchbar(props: Props) {
  return (
    <div>
      <div className="mt-4 ml-4">
        <input
          className="bg-white rounded-3xl p-2 "
          type="search"
          placeholder="example: Sushi"
          value={props.query}
          onChange={(e) => props.onQueryChange(e.target.value)}
        />
      </div>
    </div>
  );
}
