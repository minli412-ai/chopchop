import { useState } from 'react';
import type { ImageConfig } from '../../types/recipe';
import RecipePlaceholderImage from './RecipePlaceholderImage';

interface Props {
  recipeId: string;
  recipeName: string;
  imageConfig: ImageConfig;
  className?: string;
}

function RecipeImage({ recipeId, recipeName, imageConfig, className = '' }: Props) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className={`recipe-image ${className}`}>
        <RecipePlaceholderImage imageConfig={imageConfig} />
      </div>
    );
  }

  return (
    <div className={`recipe-image ${className}`}>
      <img
        src={`/images/${recipeId}.jpg`}
        alt={recipeName}
        loading="lazy"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export default RecipeImage;
