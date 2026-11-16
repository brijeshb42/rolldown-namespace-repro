import { rolldown } from 'rolldown';

const bundle = await rolldown({
  input: ['src/index.js', 'src/hooks/index.js'],
  external: ['external'],
});
const { output } = await bundle.generate({
  format: 'es',
  preserveModules: true,
  preserveModulesRoot: 'src',
});
for (const chunk of output) {
  console.log(`// ${chunk.fileName}\n${chunk.code}`);
}
