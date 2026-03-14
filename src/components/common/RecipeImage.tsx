interface Props {
  recipeId: string;
  recipeName: string;
  className?: string;
}

function RecipeImage({ recipeId, recipeName, className = '' }: Props) {
  return (
    <div className={`recipe-image ${className}`}>
      <img
        src={`/images/${recipeId}.jpg`}
        alt={recipeName}
        loading="lazy"
      />
    </div>
  );
}

export default RecipeImage;
