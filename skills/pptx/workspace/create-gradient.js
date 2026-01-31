const sharp = require('sharp');
const fs = require('fs');

async function createGradients() {
  // 创建紫色渐变背景
  const purpleGradient = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="562">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#B165FB"/>
        <stop offset="100%" style="stop-color:#7C3AED"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;

  // 创建深蓝色渐变
  const darkBlueGradient = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="562">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#181B24"/>
        <stop offset="100%" style="stop-color:#2C3E50"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;

  // 创建翡翠绿渐变
  const emeraldGradient = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="562">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#40695B"/>
        <stop offset="100%" style="stop-color:#2D5A4E"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;

  await sharp(Buffer.from(purpleGradient)).png().toFile('workspace/purple-gradient.png');
  console.log('✓ 创建紫色渐变背景');

  await sharp(Buffer.from(darkBlueGradient)).png().toFile('workspace/darkblue-gradient.png');
  console.log('✓ 创建深蓝色渐变背景');

  await sharp(Buffer.from(emeraldGradient)).png().toFile('workspace/emerald-gradient.png');
  console.log('✓ 创建翡翠绿渐变背景');
}

createGradients().catch(console.error);
