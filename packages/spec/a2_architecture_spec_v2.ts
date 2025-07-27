
// --- 1. Enhanced Enums & Data Contracts (TypeScript parity with Python) ---
export enum ModuleStatus {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
  DEPRECATED = "DEPRECATED",
}

export enum LifecycleState {
  INIT = "INITIALIZING",
  READY = "READY",
  DEGRADED = "DEGRADED",
  TERMINATED = "TERMINATED",
}

export interface BaseSchema {}
export class NormalizedGoalEnvelope implements BaseSchema {}
export class SwarmCharterRequest implements BaseSchema {}

export interface SubGoal extends BaseSchema {
  description: string;
  tags: string[];
  pillar?: string | null;
}

export interface SystemDependency {
  moduleId: string;
  required?: boolean;
  versionSpec?: string;
}

export interface PerformanceContract {
  p99LatencyMs: number;
  throughputRps?: number;
}

export interface AlgorithmicCore {
  description: string;
  pseudoCode: string;
}

export type ExecutionEnv = "python" | "rust" | "wasm";

export interface ModuleInterface {
  type: "service" | "internal_service_call" | "streaming_publication" | "streaming_subscription";
  description: string;
  inputSchema?: { new(): BaseSchema };
  outputSchema?: { new(): BaseSchema };
  perfContract?: PerformanceContract;
  method?: string;
  endpoint?: string;
  topic?: string;
}

export interface SubModule {
  purpose: string;
  actions: string[];
  algorithmicCore?: AlgorithmicCore;
  executionEnv?: ExecutionEnv;
  io?: Record<string, any>;
}

export interface ModuleSpecification {
  module: string;
  moduleId: string;
  version: string;
  status: ModuleStatus;
  lifecycleState?: LifecycleState;
  description: string;
  purpose: string;
  responsibilities: string[];
  triggers: string[];
  interfaces: Record<string, ModuleInterface>;
  subModules: Record<string, SubModule>;
  constraints: string[];
  dependencies: SystemDependency[];
  governanceHooks?: string[];
  knownFlaws?: any[];
}

// --- 2. Refined Module Specifications (add more modules as placeholders) ---
export const MgtlOmegaSpec: ModuleSpecification = {
  module: "MGTL-Ω (Meta-Goal Translation Layer)",
  moduleId: "MGTL-OMEGA-V1.0",
  version: "1.0",
  status: ModuleStatus.ACTIVE,
  lifecycleState: LifecycleState.READY,
  description: "The 'cognitive brain' of the organism...",
  purpose: "To serve as the core engine of strategic foresight and planning...",
  responsibilities: [
    "Decomposing high-level objectives into a hierarchical tree of sub-goals.",
    "Enforcing the Pillar-First Decomposition (PFD) protocol for high-novelty missions.",
  ],
  triggers: [
    "Activated upon receipt of a 'NormalizedGoalEnvelope' from the ObjectiveHub.",
  ],
  interfaces: {
    processObjective: {
      type: "internal_service_call",
      description: "The primary entry point that initiates the full 11-stage cognitive relay.",
      inputSchema: NormalizedGoalEnvelope,
      outputSchema: SwarmCharterRequest,
      perfContract: { p99LatencyMs: 500 },
    },
  },
  subModules: {
    semanticDecomposer: {
      purpose: "To perform the core brainstorming and deconstruction of the objective.",
      actions: [
        "In PFD mode, generate a FunctionalPillarMap.",
        "In Standard mode, generate a RawSubGoalList using embedding clustering.",
      ],
      algorithmicCore: {
        description: "Executes one of two decomposition algorithms based on the Governor's directive.",
        pseudoCode: `FUNCTION decompose(envelope: NormalizedGoalEnvelope, protocol: DecompositionProtocol) -> SubGoal[] {...}`,
      },
    },
    curiosityAmplifier: {
      purpose: "To be the agent of serendipity, injecting structured novelty to prevent groupthink.",
      actions: [
        "Apply stochastic perturbations to existing sub-goals.",
        "Inject 1-2 high-risk, high-reward 'wildcard' ideas into the bundle.",
      ],
      algorithmicCore: {
        description: "Injects novelty by mutating existing sub-goals and adding 'wildcards'.",
        pseudoCode: `FUNCTION amplify(subgoals: SubGoal[]) -> SubGoal[] {...}`,
      },
    },
  },
  constraints: [
    "The entire cognitive relay must complete in under 500ms (p99).",
  ],
  dependencies: [
    { moduleId: "OBJ-HUB-V1.2", required: true },
    { moduleId: "SW-MGR-V1.0", required: true },
    { moduleId: "REGISTRIES-V1.0", required: true },
  ],
  governanceHooks: ["AUDIT_DECOMPOSITION", "FLAG_HIGH_RISK_WILDCARD"],
  knownFlaws: [],
};

export const SwarmManagerSpec: ModuleSpecification = {
  module: "SwarmManager",
  moduleId: "SW-MGR-V1.0",
  version: "1.0",
  status: ModuleStatus.ACTIVE,
  lifecycleState: LifecycleState.READY,
  description: "The 'fleet commander' of the organism...",
  purpose: "To serve as the primary bridge between cognitive planning and physical execution...",
  responsibilities: ["Chartering new swarms...", "Composing swarms...", "Deploying, monitoring, and scaling..."],
  triggers: ["Activated by a 'SwarmCharterRequest' from MGTL-Ω..."],
  interfaces: {
    charterSwarm: {
      type: "internal_service_call",
      description: "Primary interface to create and deploy a new swarm.",
      inputSchema: SwarmCharterRequest,
      perfContract: { p99LatencyMs: 200 },
    },
  },
  subModules: {
    pillarAwareComposer: {
      purpose: "To intelligently compose the optimal team of agents for a mission...",
      actions: [
        "Analyze the 'pillar_origin' and 'intentTags'...",
        "Query the Registries...",
        "Apply a weighting algorithm...",
      ],
      algorithmicCore: {
        description: "A scoring and selection algorithm to compose the most effective swarm.",
        pseudoCode: `FUNCTION compose_swarm(charter: SwarmCharterRequest) -> string[] {...}`,
      },
    },
  },
  constraints: ["All swarm composition decisions must be logged..."],
  dependencies: [
    { moduleId: "MGTL-OMEGA-V1.0" },
    { moduleId: "REGISTRIES-V1.0" },
    { moduleId: "RESOURCE-ALLOCATOR-V1.0" },
  ],
  governanceHooks: [],
  knownFlaws: [],
};

// Placeholders for additional modules (expand as needed)
export const ObjectiveHubSpec: ModuleSpecification = {
  module: "ObjectiveHub",
  moduleId: "OBJ-HUB-V1.2",
  version: "1.2",
  status: ModuleStatus.ACTIVE,
  lifecycleState: LifecycleState.READY,
  description: "Central hub for receiving and normalizing objectives.",
  purpose: "Acts as the entry point for new objectives.",
  responsibilities: ["Receive objectives", "Normalize and validate input"],
  triggers: ["External API call"],
  interfaces: {},
  subModules: {},
  constraints: [],
  dependencies: [],
};

export const RegistriesSpec: ModuleSpecification = {
  module: "Registries",
  moduleId: "REGISTRIES-V1.0",
  version: "1.0",
  status: ModuleStatus.ACTIVE,
  lifecycleState: LifecycleState.READY,
  description: "Service registry and lookup.",
  purpose: "Maintains registry of agents, modules, and resources.",
  responsibilities: ["Lookup", "Registration", "Discovery"],
  triggers: ["Lookup request"],
  interfaces: {},
  subModules: {},
  constraints: [],
  dependencies: [],
};

export const ResourceAllocatorSpec: ModuleSpecification = {
  module: "ResourceAllocator",
  moduleId: "RESOURCE-ALLOCATOR-V1.0",
  version: "1.0",
  status: ModuleStatus.ACTIVE,
  lifecycleState: LifecycleState.READY,
  description: "Allocates resources to swarms and modules.",
  purpose: "Handles resource allocation requests.",
  responsibilities: ["Allocate resources", "Track usage"],
  triggers: ["Allocation request"],
  interfaces: {},
  subModules: {},
  constraints: [],
  dependencies: [],
};

// --- 3. Registry & Diagnostics ---
export const A2SystemRegistry: Record<string, ModuleSpecification> = {
  [MgtlOmegaSpec.moduleId]: MgtlOmegaSpec,
  [SwarmManagerSpec.moduleId]: SwarmManagerSpec,
  [ObjectiveHubSpec.moduleId]: ObjectiveHubSpec,
  [RegistriesSpec.moduleId]: RegistriesSpec,
  [ResourceAllocatorSpec.moduleId]: ResourceAllocatorSpec,
};

export function validateRegistry(registry: Record<string, ModuleSpecification>, showSLOWarnings = false): string[] {
  const errors: string[] = [];
  const allIds = Object.keys(registry);
  for (const [moduleId, spec] of Object.entries(registry)) {
    if (!spec.subModules || Object.keys(spec.subModules).length === 0) {
      errors.push(`[WARNING] ${moduleId}: no subModules defined.`);
    }
    for (const [name, sm] of Object.entries(spec.subModules || {})) {
      if (showSLOWarnings && !sm.algorithmicCore) {
        errors.push(`[INFO]    ${moduleId}.${name}: missing algorithmicCore detail.`);
      }
    }
    for (const dep of spec.dependencies) {
      if (!allIds.includes(dep.moduleId)) {
        errors.push(`[ERROR]   ${moduleId}: broken dependency '${dep.moduleId}'.`);
      }
    }
  }
  return errors;
}
