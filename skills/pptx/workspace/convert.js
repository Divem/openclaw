const pptxgen = require('pptxgenjs');
const html2pptx = require('../scripts/html2pptx');
const path = require('path');

async function createPresentation() {
    console.log('开始创建演示文稿...\n');

    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Agent Skills Training';
    pptx.title = 'Agent Skills 科普培训';
    pptx.subject = '面向产品经理的技能培训';

    const slides = [
        'workspace/slide01-cover.html',
        'workspace/slide02-what-is-skill.html',
        'workspace/slide03-why-skill.html',
        'workspace/slide04-use-cases.html',
        'workspace/slide05-value.html',
        'workspace/slide06-structure.html',
        'workspace/slide07-create-skill.html',
        'workspace/slide08-best-practices.html',
        'workspace/slide09-summary.html'
    ];

    for (let i = 0; i < slides.length; i++) {
        const slidePath = slides[i];
        console.log(`处理幻灯片 ${i + 1}/${slides.length}: ${slidePath}`);
        try {
            await html2pptx(slidePath, pptx);
            console.log(`✓ 完成`);
        } catch (error) {
            console.error(`✗ 错误:`, error.message);
            throw error;
        }
    }

    const outputFile = 'workspace/skill-training.pptx';
    await pptx.writeFile({ fileName: outputFile });
    console.log(`\n✅ 演示文稿已创建: ${outputFile}`);
}

createPresentation().catch(error => {
    console.error('创建演示文稿时出错:', error);
    process.exit(1);
});
