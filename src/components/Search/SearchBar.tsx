import { useTranslation } from 'react-i18next';

interface Props {
  query: string;
  onQueryChange: (query: string) => void;
}

function SearchBar({ query, onQueryChange }: Props) {
  const { t } = useTranslation();

  return (
    <div className="search-bar">
      <span className="search-icon">&#x1F50D;</span>
      <input
        type="text"
        className="search-input"
        placeholder={t('search.placeholder')}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        aria-label={t('search.placeholder')}
      />
      {query && (
        <button
          className="search-clear"
          onClick={() => onQueryChange('')}
          aria-label={t('search.clearSearch')}
        >
          &#x2715;
        </button>
      )}
    </div>
  );
}

export default SearchBar;
