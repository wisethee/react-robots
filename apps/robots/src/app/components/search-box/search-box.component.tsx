import './search-box.styles.scss';

type SearchBoxProps = {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ onSearchChange }: SearchBoxProps) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="search monsters"
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
