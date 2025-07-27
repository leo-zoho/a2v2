import { A2SystemRegistry, MgtlOmegaSpec, validateRegistry, exportSpecToJson, generateDependencyGraphDot } from './a2_architecture_spec_v2';

function mainCli() {
  console.log('A2 Specification CLI (v3.1)\n');

  // 1. Validate the entire registry
  const errors = validateRegistry(A2SystemRegistry);
  if (errors.length) {
    console.log('--- Diagnostics ---');
    errors.forEach(e => console.log(e));
  } else {
    console.log('No registry errors found.');
  }

  // 2. Export a single module to JSON
  console.log('\n--- Exporting MGTL-OMEGA-V1.0 to JSON ---');
  const mgtlJson = exportSpecToJson(MgtlOmegaSpec);
  console.log(mgtlJson);

  // 3. Generate and display the dependency graph
  console.log('\n--- Generating Dependency Graph (Graphviz DOT source) ---');
  const depGraphDot = generateDependencyGraphDot(A2SystemRegistry);
  console.log(depGraphDot);
  console.log('\n(To render, save the above DOT source to a file and use a Graphviz viewer)');
}

if (require.main === module) {
  mainCli();
}
