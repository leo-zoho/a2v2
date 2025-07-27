"use strict";
// a2_architecture_spec_v2.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2SystemRegistry = exports.SwarmManagerSpec = exports.MgtlOmegaSpec = exports.LifecycleState = exports.ModuleStatus = void 0;
exports.validateRegistry = validateRegistry;
// --- 1. Enhanced Enums & Data Contracts ---
var ModuleStatus;
(function (ModuleStatus) {
    ModuleStatus["ACTIVE"] = "ACTIVE";
    ModuleStatus["ARCHIVED"] = "ARCHIVED";
    ModuleStatus["DEPRECATED"] = "DEPRECATED";
})(ModuleStatus || (exports.ModuleStatus = ModuleStatus = {}));
var LifecycleState;
(function (LifecycleState) {
    LifecycleState["INIT"] = "INITIALIZING";
    LifecycleState["READY"] = "READY";
    LifecycleState["DEGRADED"] = "DEGRADED";
    LifecycleState["TERMINATED"] = "TERMINATED";
})(LifecycleState || (exports.LifecycleState = LifecycleState = {}));
// --- 2. Refined Module Specifications ---
exports.MgtlOmegaSpec = {
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
exports.SwarmManagerSpec = {
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
// --- 3. Registry & Diagnostics ---
exports.A2SystemRegistry = {
    [exports.MgtlOmegaSpec.moduleId]: exports.MgtlOmegaSpec,
    [exports.SwarmManagerSpec.moduleId]: exports.SwarmManagerSpec,
};
function validateRegistry(registry, showSLOWarnings = false) {
    const errors = [];
    const allIds = Object.keys(registry);
    for (const [moduleId, spec] of Object.entries(registry)) {
        if (Object.keys(spec.subModules).length === 0) {
            errors.push(`[WARNING] ${moduleId}: no subModules defined.`);
        }
        for (const [name, sm] of Object.entries(spec.subModules)) {
            if (showSLOWarnings && sm.perfContract == null) {
                errors.push(`[INFO]    ${moduleId}.${name}: missing submodule SLO.`);
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
