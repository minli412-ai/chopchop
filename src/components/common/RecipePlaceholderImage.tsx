import type { ReactNode } from 'react';
import type { ImageConfig } from '../../types/recipe';

interface Props {
  imageConfig: ImageConfig;
  className?: string;
}

function getPatternElements(pattern: string): ReactNode {
  switch (pattern) {
    case 'steam':
      // Wavy rising lines
      return (
        <g opacity="0.15" fill="none" stroke="white" strokeWidth="2">
          <path d="M60,220 Q65,200 60,180 Q55,160 60,140 Q65,120 60,100" />
          <path d="M120,230 Q125,210 120,190 Q115,170 120,150 Q125,130 120,110" />
          <path d="M180,225 Q185,205 180,185 Q175,165 180,145 Q185,125 180,105" />
          <path d="M280,220 Q285,200 280,180 Q275,160 280,140 Q285,120 280,100" />
          <path d="M340,230 Q345,210 340,190 Q335,170 340,150 Q345,130 340,110" />
        </g>
      );
    case 'spicy':
      // Small scattered dots/circles
      return (
        <g opacity="0.15" fill="white">
          <circle cx="45" cy="30" r="3" />
          <circle cx="120" cy="55" r="2" />
          <circle cx="200" cy="25" r="4" />
          <circle cx="300" cy="45" r="2.5" />
          <circle cx="360" cy="20" r="3" />
          <circle cx="80" cy="80" r="2" />
          <circle cx="160" cy="100" r="3.5" />
          <circle cx="250" cy="75" r="2" />
          <circle cx="330" cy="95" r="3" />
          <circle cx="50" cy="140" r="2.5" />
          <circle cx="140" cy="160" r="2" />
          <circle cx="220" cy="145" r="3" />
          <circle cx="310" cy="170" r="2" />
          <circle cx="370" cy="130" r="2.5" />
          <circle cx="70" cy="200" r="3" />
          <circle cx="180" cy="215" r="2" />
          <circle cx="280" cy="205" r="2.5" />
          <circle cx="350" cy="220" r="2" />
        </g>
      );
    case 'fresh':
      // Small leaf-like shapes
      return (
        <g opacity="0.15" fill="white">
          <ellipse cx="60" cy="40" rx="8" ry="4" transform="rotate(30 60 40)" />
          <ellipse cx="150" cy="70" rx="6" ry="3" transform="rotate(-20 150 70)" />
          <ellipse cx="280" cy="35" rx="7" ry="3.5" transform="rotate(45 280 35)" />
          <ellipse cx="350" cy="80" rx="6" ry="3" transform="rotate(-35 350 80)" />
          <ellipse cx="100" cy="130" rx="8" ry="4" transform="rotate(20 100 130)" />
          <ellipse cx="230" cy="120" rx="6" ry="3" transform="rotate(-40 230 120)" />
          <ellipse cx="340" cy="150" rx="7" ry="3.5" transform="rotate(25 340 150)" />
          <ellipse cx="50" cy="200" rx="6" ry="3" transform="rotate(-15 50 200)" />
          <ellipse cx="180" cy="210" rx="8" ry="4" transform="rotate(35 180 210)" />
          <ellipse cx="310" cy="220" rx="6" ry="3" transform="rotate(-25 310 220)" />
        </g>
      );
    case 'crispy':
      // Small zigzag/sparkle marks
      return (
        <g opacity="0.15" stroke="white" strokeWidth="1.5" fill="none">
          <path d="M50,30 L55,25 L50,20 M55,25 L60,30 L55,35" />
          <path d="M150,50 L155,45 L150,40 M155,45 L160,50 L155,55" />
          <path d="M300,35 L305,30 L300,25 M305,30 L310,35 L305,40" />
          <path d="M80,110 L85,105 L80,100 M85,105 L90,110 L85,115" />
          <path d="M220,90 L225,85 L220,80 M225,85 L230,90 L225,95" />
          <path d="M350,120 L355,115 L350,110 M355,115 L360,120 L355,125" />
          <path d="M60,190 L65,185 L60,180 M65,185 L70,190 L65,195" />
          <path d="M200,200 L205,195 L200,190 M205,195 L210,200 L205,205" />
          <path d="M330,210 L335,205 L330,200 M335,205 L340,210 L335,215" />
        </g>
      );
    case 'circles':
      // Scattered circles (concentric rings)
      return (
        <g opacity="0.12" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="70" cy="50" r="15" />
          <circle cx="70" cy="50" r="8" />
          <circle cx="200" cy="30" r="12" />
          <circle cx="200" cy="30" r="6" />
          <circle cx="330" cy="60" r="14" />
          <circle cx="330" cy="60" r="7" />
          <circle cx="120" cy="150" r="10" />
          <circle cx="120" cy="150" r="5" />
          <circle cx="280" cy="180" r="13" />
          <circle cx="280" cy="180" r="6" />
          <circle cx="50" cy="210" r="11" />
          <circle cx="370" cy="200" r="9" />
        </g>
      );
    case 'squares':
      // Scattered small squares
      return (
        <g opacity="0.12" fill="none" stroke="white" strokeWidth="1.5">
          <rect x="55" y="35" width="14" height="14" rx="2" transform="rotate(15 62 42)" />
          <rect x="170" y="20" width="10" height="10" rx="1" transform="rotate(-10 175 25)" />
          <rect x="310" y="50" width="12" height="12" rx="2" transform="rotate(25 316 56)" />
          <rect x="90" y="130" width="11" height="11" rx="1" transform="rotate(-20 96 136)" />
          <rect x="250" y="160" width="14" height="14" rx="2" transform="rotate(10 257 167)" />
          <rect x="370" y="140" width="10" height="10" rx="1" transform="rotate(-30 375 145)" />
          <rect x="40" y="200" width="12" height="12" rx="2" transform="rotate(20 46 206)" />
          <rect x="190" y="210" width="10" height="10" rx="1" transform="rotate(-15 195 215)" />
        </g>
      );
    case 'dots':
      // Polka dot pattern
      return (
        <g opacity="0.12" fill="white">
          <circle cx="40" cy="40" r="4" />
          <circle cx="100" cy="40" r="4" />
          <circle cx="160" cy="40" r="4" />
          <circle cx="220" cy="40" r="4" />
          <circle cx="280" cy="40" r="4" />
          <circle cx="340" cy="40" r="4" />
          <circle cx="70" cy="90" r="4" />
          <circle cx="130" cy="90" r="4" />
          <circle cx="190" cy="90" r="4" />
          <circle cx="250" cy="90" r="4" />
          <circle cx="310" cy="90" r="4" />
          <circle cx="370" cy="90" r="4" />
          <circle cx="40" cy="140" r="4" />
          <circle cx="100" cy="140" r="4" />
          <circle cx="160" cy="140" r="4" />
          <circle cx="220" cy="140" r="4" />
          <circle cx="280" cy="140" r="4" />
          <circle cx="340" cy="140" r="4" />
          <circle cx="70" cy="190" r="4" />
          <circle cx="130" cy="190" r="4" />
          <circle cx="190" cy="190" r="4" />
          <circle cx="250" cy="190" r="4" />
          <circle cx="310" cy="190" r="4" />
          <circle cx="370" cy="190" r="4" />
        </g>
      );
    default:
      return null;
  }
}

function getIconPath(icon: string): ReactNode {
  switch (icon) {
    case 'wok':
      return (
        <g transform="translate(155, 75)" fill="white" opacity="0.8">
          {/* Wok body */}
          <path d="M0,40 Q45,-15 90,40" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="45" cy="40" rx="45" ry="12" fill="none" stroke="white" strokeWidth="3" />
          {/* Handle */}
          <line x1="90" y1="30" x2="120" y2="15" stroke="white" strokeWidth="4" strokeLinecap="round" />
          {/* Steam lines */}
          <path d="M25,25 Q28,15 25,5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M45,20 Q48,10 45,0" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M65,25 Q68,15 65,5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case 'bowl':
      return (
        <g transform="translate(155, 70)" fill="white" opacity="0.8">
          {/* Bowl */}
          <path d="M0,30 Q5,70 45,70 Q85,70 90,30" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <line x1="0" y1="30" x2="90" y2="30" stroke="white" strokeWidth="3" />
          {/* Chopsticks */}
          <line x1="30" y1="28" x2="15" y2="-5" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="28" x2="55" y2="-5" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    case 'fish':
      return (
        <g transform="translate(145, 85)" fill="white" opacity="0.8">
          {/* Fish body */}
          <ellipse cx="55" cy="30" rx="45" ry="22" fill="none" stroke="white" strokeWidth="3.5" />
          {/* Tail */}
          <path d="M100,30 L120,10 L120,50 Z" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round" />
          {/* Eye */}
          <circle cx="30" cy="25" r="4" fill="white" />
          {/* Fin */}
          <path d="M55,8 Q60,20 55,32" fill="none" stroke="white" strokeWidth="2" />
        </g>
      );
    case 'tofu':
      return (
        <g transform="translate(160, 75)" fill="white" opacity="0.8">
          {/* Cube front face */}
          <rect x="10" y="25" width="55" height="45" rx="3" fill="none" stroke="white" strokeWidth="3.5" />
          {/* Cube top face */}
          <path d="M10,25 L30,10 L85,10 L65,25" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round" />
          {/* Cube side face */}
          <path d="M65,25 L85,10 L85,55 L65,70" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round" />
          {/* Cross marks on front */}
          <line x1="35" y1="25" x2="35" y2="70" stroke="white" strokeWidth="1.5" />
          <line x1="10" y1="47" x2="65" y2="47" stroke="white" strokeWidth="1.5" />
        </g>
      );
    case 'rice':
      return (
        <g transform="translate(150, 65)" fill="white" opacity="0.8">
          {/* Bowl */}
          <path d="M0,40 Q5,80 50,80 Q95,80 100,40" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <line x1="0" y1="40" x2="100" y2="40" stroke="white" strokeWidth="3" />
          {/* Rice mound */}
          <path d="M10,40 Q50,15 90,40" fill="none" stroke="white" strokeWidth="2.5" />
          {/* Rice grains */}
          <ellipse cx="35" cy="33" rx="4" ry="2" transform="rotate(-20 35 33)" />
          <ellipse cx="50" cy="28" rx="4" ry="2" transform="rotate(15 50 28)" />
          <ellipse cx="65" cy="32" rx="4" ry="2" transform="rotate(-10 65 32)" />
          {/* Chopsticks */}
          <line x1="55" y1="35" x2="80" y2="0" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="65" y1="35" x2="90" y2="0" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    case 'noodles':
      return (
        <g transform="translate(150, 70)" fill="white" opacity="0.8">
          {/* Bowl */}
          <path d="M0,35 Q5,75 50,75 Q95,75 100,35" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <line x1="0" y1="35" x2="100" y2="35" stroke="white" strokeWidth="3" />
          {/* Noodle wavy lines */}
          <path d="M20,30 Q30,20 40,30 Q50,40 60,30 Q70,20 80,30" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M25,22 Q35,12 45,22 Q55,32 65,22 Q75,12 85,22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M15,15 Q25,5 35,15 Q45,25 55,15" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case 'meat':
      return (
        <g transform="translate(155, 80)" fill="white" opacity="0.8">
          {/* Steak shape */}
          <path d="M10,25 Q0,15 10,5 Q30,-5 60,5 Q80,10 85,25 Q90,40 75,50 Q50,60 25,50 Q5,45 10,25 Z" fill="none" stroke="white" strokeWidth="3.5" />
          {/* Marbling lines */}
          <path d="M25,15 Q40,25 55,15" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M20,30 Q35,40 55,30" fill="none" stroke="white" strokeWidth="1.5" />
          {/* Bone */}
          <circle cx="75" cy="35" r="6" fill="none" stroke="white" strokeWidth="2" />
        </g>
      );
    case 'vegetable':
      return (
        <g transform="translate(160, 70)" fill="white" opacity="0.8">
          {/* Leaf shape */}
          <path d="M40,80 Q10,50 20,20 Q30,0 45,5 Q55,0 65,20 Q75,50 40,80 Z" fill="none" stroke="white" strokeWidth="3.5" />
          {/* Leaf vein center */}
          <path d="M40,75 L43,15" fill="none" stroke="white" strokeWidth="2" />
          {/* Side veins */}
          <path d="M43,25 L60,18" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M42,35 L25,25" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M42,45 L60,38" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M41,55 L25,48" fill="none" stroke="white" strokeWidth="1.5" />
        </g>
      );
    case 'cucumber':
      return (
        <g transform="translate(145, 85)" fill="white" opacity="0.8">
          {/* Elongated cucumber shape */}
          <path d="M10,35 Q5,20 20,10 Q50,0 90,10 Q110,15 110,30 Q110,45 90,50 Q50,60 20,50 Q5,45 10,35 Z" fill="none" stroke="white" strokeWidth="3.5" />
          {/* Texture lines */}
          <path d="M30,15 L35,48" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M50,12 L55,50" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M70,12 L75,50" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M90,15 L92,45" fill="none" stroke="white" strokeWidth="1.5" />
          {/* Bumps */}
          <circle cx="40" cy="20" r="2.5" fill="white" />
          <circle cx="60" cy="42" r="2.5" fill="white" />
          <circle cx="80" cy="18" r="2.5" fill="white" />
        </g>
      );
    case 'dessert':
      return (
        <g transform="translate(160, 70)" fill="white" opacity="0.8">
          {/* Cup/pudding shape */}
          <path d="M10,30 L20,75 L65,75 L75,30" fill="none" stroke="white" strokeWidth="3.5" strokeLinejoin="round" />
          {/* Pudding dome */}
          <path d="M5,30 Q42,0 80,30" fill="none" stroke="white" strokeWidth="3" />
          <line x1="5" y1="30" x2="80" y2="30" stroke="white" strokeWidth="2.5" />
          {/* Cherry on top */}
          <circle cx="42" cy="8" r="5" fill="none" stroke="white" strokeWidth="2.5" />
          <path d="M42,3 Q48,-3 52,-2" fill="none" stroke="white" strokeWidth="1.5" />
        </g>
      );
    case 'dumpling':
      return (
        <g transform="translate(155, 80)" fill="white" opacity="0.8">
          {/* Dumpling body */}
          <path d="M5,30 Q5,0 45,0 Q85,0 85,30 Q85,50 45,50 Q5,50 5,30 Z" fill="none" stroke="white" strokeWidth="3.5" />
          {/* Pleats along top */}
          <path d="M15,15 Q20,10 25,15" fill="none" stroke="white" strokeWidth="2" />
          <path d="M30,10 Q35,5 40,10" fill="none" stroke="white" strokeWidth="2" />
          <path d="M45,8 Q50,3 55,8" fill="none" stroke="white" strokeWidth="2" />
          <path d="M60,10 Q65,5 70,10" fill="none" stroke="white" strokeWidth="2" />
          {/* Crimp line */}
          <path d="M10,25 Q45,12 80,25" fill="none" stroke="white" strokeWidth="1.5" />
        </g>
      );
    case 'steamer':
      return (
        <g transform="translate(155, 65)" fill="white" opacity="0.8">
          {/* Steamer basket body */}
          <rect x="5" y="25" width="85" height="40" rx="5" fill="none" stroke="white" strokeWidth="3.5" />
          {/* Lid */}
          <path d="M0,25 Q47,0 95,25" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
          {/* Lid handle */}
          <circle cx="47" cy="8" r="5" fill="none" stroke="white" strokeWidth="2.5" />
          {/* Steam holes */}
          <circle cx="25" cy="45" r="3" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="47" cy="45" r="3" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="69" cy="45" r="3" fill="none" stroke="white" strokeWidth="1.5" />
          {/* Steam */}
          <path d="M30,0 Q33,-8 30,-15" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M65,0 Q68,-8 65,-15" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );
    case 'tomato':
      return (
        <g transform="translate(160, 75)" fill="white" opacity="0.8">
          {/* Tomato body */}
          <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="3.5" />
          {/* Top indent */}
          <path d="M25,12 Q40,18 55,12" fill="none" stroke="white" strokeWidth="2" />
          {/* Stem */}
          <path d="M40,5 L40,-2" stroke="white" strokeWidth="3" strokeLinecap="round" />
          {/* Leaf */}
          <path d="M40,2 Q52,-5 48,5" fill="none" stroke="white" strokeWidth="2" />
          <path d="M40,2 Q28,-5 32,5" fill="none" stroke="white" strokeWidth="2" />
          {/* Section lines */}
          <path d="M40,10 Q30,40 40,75" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M40,10 Q50,40 40,75" fill="none" stroke="white" strokeWidth="1.5" />
        </g>
      );
    default:
      // Default generic plate icon
      return (
        <g transform="translate(160, 85)" fill="white" opacity="0.8">
          <ellipse cx="40" cy="30" rx="45" ry="20" fill="none" stroke="white" strokeWidth="3.5" />
          <ellipse cx="40" cy="28" rx="30" ry="12" fill="none" stroke="white" strokeWidth="2" />
        </g>
      );
  }
}

function RecipePlaceholderImage({ imageConfig, className }: Props) {
  const { primaryColor, secondaryColor, icon, pattern } = imageConfig;
  const gradientId = `grad-${icon}-${pattern}`;

  return (
    <svg
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
      className={`recipe-placeholder-image${className ? ` ${className}` : ''}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${icon} illustration`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>

      {/* Background gradient */}
      <rect width="400" height="250" fill={`url(#${gradientId})`} />

      {/* Pattern overlay */}
      {getPatternElements(pattern)}

      {/* Food icon */}
      {getIconPath(icon)}
    </svg>
  );
}

export default RecipePlaceholderImage;
