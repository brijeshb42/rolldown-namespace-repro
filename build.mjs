import { rolldown } from 'rolldown';

const bundle = await rolldown({
  input: ['src/index.js', 'src/hooks/index.js'],
  external: ['external'],
});
const { output } = await bundle.write({
  dir: 'build',
  format: 'es',
  preserveModules: true,
  preserveModulesRoot: 'src',
});
for (const chunk of output) {
  console.log(`// build/${chunk.fileName}\n${chunk.code}`);
}
