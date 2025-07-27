
// --- 1. Enhanced Enums & Data Contracts (TypeScript v3.1 parity) ---
export enum ModuleStatus {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

export enum GovernanceSeverity {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export type Tag = "wildcard" | "curiosity" | "security_sensitive" | "blue_sky_r&d";

export interface BaseSchema {}
export class NormalizedGoalEnvelope implements BaseSchema {}
export class SwarmCharterRequest implements BaseSchema {}

export interface PerformanceContract {
  p99LatencyMs: number;
  throughputOpsSec?: number;
}

export interface AlgorithmicCore {
  description: string;
  pseudoCode: string;
}

export interface GovernanceHook {
  name: string;
  triggerCondition: string;
  severity: GovernanceSeverity;
}

export interface SystemDependency {
  moduleId: string;
  required?: boolean;
  versionSpec?: string;
}

export interface KnownFlaw {
  flawId: string;
  name: string;
  description: string;
  status: string;
}

export interface ModuleInterface {
  type: "service" | "internal_service_call" | "streaming_publication" | "streaming_subscription";
  description: string;
  inputSchema?: { new(): BaseSchema } | string;
  outputSchema?: { new(): BaseSchema } | string;
  perfContract?: PerformanceContract;
  method?: string;
  endpoint?: string;
  topic?: string;
}

export interface SubModule {
  purpose: string;
  actions: string[];
  algorithmicCore?: AlgorithmicCore;
  perfContract?: PerformanceContract;
}

export interface ModuleSpecification {
  module: string;
  moduleId: string;
  version: string;
  engineVersionCompat: string;
  status: ModuleStatus;
  description: string;
  purpose: string;
  responsibilities: string[];
  triggers: string[];
  interfaces: Record<string, ModuleInterface>;
  subModules: Record<string, SubModule>;
  constraints: string[];
  dependencies: SystemDependency[];
  governanceHooks?: GovernanceHook[];
  knownFlaws?: KnownFlaw[];
}

// --- 2. Refined Module Specifications (add more modules as placeholders) ---
export const MgtlOmegaSpec: ModuleSpecification = {
  module: "MGTL-Ω",
  moduleId: "MGTL-OMEGA-V1.0",
  version: "1.0",
  engineVersionCompat: "A2 Engine v1.1-pre",
  status: ModuleStatus.ACTIVE,
  description: "The 'cognitive brain' of the organism...",
  purpose: "To serve as the core engine of strategic foresight and planning...",
  responsibilities: ["Decomposing high-level objectives...", "Enforcing the Pillar-First Decomposition (PFD) protocol..."],
  triggers: ["Activated upon receipt of a 'NormalizedGoalEnvelope'..."],
  interfaces: {
    processObjective: {
      type: "internal_service_call",
      description: "Primary entry point for the cognitive relay.",
      perfContract: { p99LatencyMs: 500 },
    },
  },
  subModules: {
    decompositionGovernor: {
      purpose: "To act as the strategic fork...",
      actions: ["Analyze 'novelty_score' and 'tags'...", "Activate PFD protocol..."],
      algorithmicCore: {
        description: "Rule-based decision gate for decomposition strategy.",
        pseudoCode: "FUNCTION decide_protocol(envelope):\n  IF Tag.BLUE_SKY in envelope.tags:\n    RETURN 'PFD'",
      },
      perfContract: { p99LatencyMs: 20 },
    },
    semanticDecomposer: {
      purpose: "To perform the core brainstorming...",
      actions: ["In PFD mode, generate a FunctionalPillarMap.", "In Standard mode, generate a RawSubGoalList..."],
      algorithmicCore: {
        description: "Executes decomposition algorithms.",
        pseudoCode: "FUNCTION decompose(envelope, protocol):\n  # ...",
      },
      perfContract: { p99LatencyMs: 200 },
    },
    curiosityAmplifier: {
      purpose: "To be the agent of serendipity...",
      actions: ["Apply stochastic perturbations...", "Inject 'wildcard' ideas..."]
    }
  },
  constraints: ["The entire cognitive relay must complete in under 500ms (p99)."],
  dependencies: [
    { moduleId: "OBJ-HUB-V1.2" },
    { moduleId: "SW-MGR-V1.0" },
    { moduleId: "REGISTRIES-V1.0" },
  ],
  governanceHooks: [
    { name: "AUDIT_PFD_TRIGGER", triggerCondition: "On PFD protocol activation", severity: GovernanceSeverity.INFO },
    { name: "FLAG_HIGH_RISK_WILDCARD", triggerCondition: "On injection of a 'wildcard' tag with high cost estimate", severity: GovernanceSeverity.WARN }
  ],
  knownFlaws: [],
};



// Placeholders for additional modules (expand as needed)
export const ObjectiveHubSpec: ModuleSpecification = {
  module: "ObjectiveHub",
  moduleId: "OBJ-HUB-V1.2",
  version: "1.2",
  engineVersionCompat: "A2 Engine v1.1-pre",
  status: ModuleStatus.ACTIVE,
  description: "...",
  purpose: "...",
  responsibilities: [],
  triggers: [],
  interfaces: {},
  subModules: {},
  constraints: [],
  dependencies: [ { moduleId: "MGTL-OMEGA-V1.0" } ],
};

export const SwarmManagerSpec: ModuleSpecification = {
  module: "SwarmManager",
  moduleId: "SW-MGR-V1.0",
  version: "1.0",
  engineVersionCompat: "A2 Engine v1.1-pre",
  status: ModuleStatus.ACTIVE,
  description: "...",
  purpose: "...",
  responsibilities: [],
  triggers: [],
  interfaces: {},
  subModules: {},
  constraints: [],
  dependencies: [ { moduleId: "MGTL-OMEGA-V1.0" }, { moduleId: "REGISTRIES-V1.0" } ],
};

export const RegistriesSpec: ModuleSpecification = {
  module: "Registries",
  moduleId: "REGISTRIES-V1.0",
  version: "1.0",
  engineVersionCompat: "A2 Engine v1.1-pre",
  status: ModuleStatus.ACTIVE,
  description: "...",
  purpose: "...",
  responsibilities: [],
  triggers: [],
  interfaces: {},
  subModules: {},
  constraints: [],
  dependencies: [],
};

export const ResourceAllocatorSpec: ModuleSpecification = {
  module: "ResourceAllocator",
  moduleId: "RESOURCE-ALLOCATOR-V1.0",
  version: "1.0",
  engineVersionCompat: "A2 Engine v1.1-pre",
  status: ModuleStatus.ACTIVE,
  description: "...",
  purpose: "...",
  responsibilities: [],
  triggers: [],
  interfaces: {},
  subModules: {},
  constraints: [],
  dependencies: [],
};

// --- 3. Registry & Diagnostics ---
export const A2SystemRegistry: Record<string, ModuleSpecification> = {
  [MgtlOmegaSpec.moduleId]: MgtlOmegaSpec,
  [ObjectiveHubSpec.moduleId]: ObjectiveHubSpec,
  [SwarmManagerSpec.moduleId]: SwarmManagerSpec,
  [RegistriesSpec.moduleId]: RegistriesSpec,
  [ResourceAllocatorSpec.moduleId]: ResourceAllocatorSpec,
  // ...add all 10+ modules here as needed
};

// --- Diagnostics ---
const CRITICAL_SUBMODULES = [
  "REFLEX-BUS-V1.0.eventBroker",
  "MGTL-OMEGA-V1.0.semanticDecomposer",
  "FEEDBACK-ENG-V1.0.anomalyDetector"
];

export function validateRegistry(registry: Record<string, ModuleSpecification>): string[] {
  const errors: string[] = [];
  const allIds = Object.keys(registry);
  for (const [moduleId, spec] of Object.entries(registry)) {
    // Broken dependencies
    for (const dep of spec.dependencies) {
      if (!allIds.includes(dep.moduleId) && !dep.moduleId.includes("CONCEPTUAL")) {
        errors.push(`[ERROR]   ${moduleId}: Broken dependency! Cannot find module '${dep.moduleId}'.`);
      }
    }
    // Critical submodule SLOs
    for (const [name, sm] of Object.entries(spec.subModules || {})) {
      const submoduleFqn = `${moduleId}.${name}`;
      if (CRITICAL_SUBMODULES.includes(submoduleFqn) && !sm.perfContract) {
        errors.push(`[WARN]    ${submoduleFqn}: Critical submodule is missing a PerformanceContract (SLO).`);
      }
    }
  }
  return errors;
}

// --- Export Utilities ---
export function exportSpecToJson(spec: ModuleSpecification): string {
  return JSON.stringify(spec, null, 2);
}

export function generateDependencyGraphDot(registry: Record<string, ModuleSpecification>): string {
  let dot = 'digraph A2_Architecture {\n  node [shape=box style="rounded,filled" fillcolor=lightblue];\n  rankdir=LR;\n  splines=ortho;\n';
  for (const [moduleId, spec] of Object.entries(registry)) {
    dot += `  "${moduleId}" [label="${spec.module}\\n(${moduleId})"]\n`;
    for (const dep of spec.dependencies) {
      dot += `  "${moduleId}" -> "${dep.moduleId}"\n`;
    }
  }
  dot += '}\n';
  return dot;
}
