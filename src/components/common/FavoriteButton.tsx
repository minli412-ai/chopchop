import { useTranslation } from 'react-i18next';

interface Props {
  recipeId: string;
  isFavorite: boolean;
  onToggle: (recipeId: string) => void;
}

function FavoriteButton({ recipeId, isFavorite, onToggle }: Props) {
  const { t } = useTranslation();

  return (
    <button
      className={`favorite-btn ${isFavorite ? 'is-favorite' : ''}`}
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation if inside a Link
        e.stopPropagation();
        onToggle(recipeId);
      }}
      aria-label={isFavorite ? t('favorites.removeFavorite') : t('favorites.addFavorite')}
      title={isFavorite ? t('favorites.removeFavorite') : t('favorites.addFavorite')}
    >
      {isFavorite ? '\u2605' : '\u2606'}
    </button>
  );
}

export default FavoriteButton;
