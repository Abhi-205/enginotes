/**
 * Client-side dynamic AI solution & summarizer generator.
 * Works offline and in static deployment environments like GitHub Pages
 * where an Express backend server is not running.
 */

export function cleanResponseText(raw: string): string {
  if (!raw) return '';

  return raw
    // Strip math delimiters
    .replace(/\$\$(.*?)\$\$/gs, '$1')
    .replace(/\$(.*?)\$/g, '$1')
    // Common LaTeX math commands to plain text / Unicode
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\mathcal\{([^}]+)\}/g, '$1')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\textbf\{([^}]+)\}/g, '$1')
    .replace(/\\textit\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\sf\{([^}]+)\}/g, '$1')
    .replace(/\\vec\{([^}]+)\}/g, '$1')
    .replace(/\\overline\{([^}]+)\}/g, '$1')
    .replace(/\\underline\{([^}]+)\}/g, '$1')
    .replace(/\\hat\{([^}]+)\}/g, '$1')
    // Fractions \frac{a}{b} -> (a) / (b)
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1) / ($2)')
    .replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '($1) / ($2)')
    // Square root \sqrt{x} -> √(x)
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, '$1√($2)')
    // Operators and symbols
    .replace(/\\sum_\{([^}]+)\}\^\{([^}]+)\}/g, 'Σ (from $1 to $2)')
    .replace(/\\sum/g, 'Σ')
    .replace(/\\int_\{([^}]+)\}\^\{([^}]+)\}/g, '∫ (from $1 to $2)')
    .replace(/\\int/g, '∫')
    .replace(/\\partial/g, '∂')
    .replace(/\\nabla/g, '∇')
    .replace(/\\times/g, ' × ')
    .replace(/\\div/g, ' ÷ ')
    .replace(/\\cdot/g, ' · ')
    .replace(/\\pm/g, '±')
    .replace(/\\mp/g, '∓')
    .replace(/\\approx/g, '≈')
    .replace(/\\neq/g, '≠')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\infty/g, '∞')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\mu/g, 'μ')
    .replace(/\\pi/g, 'π')
    .replace(/\\theta/g, 'θ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\quad/g, ' ')
    .replace(/\\qquad/g, '  ')
    .replace(/\\,/g, ' ')
    .replace(/\\left/g, '')
    .replace(/\\right/g, '')
    // Remove standalone horizontal rule lines
    .replace(/^---+$/gm, '')
    .replace(/^\*\*\*+$/gm, '')
    // Remove stray single backslashes
    .replace(/\\/g, '')
    .trim();
}

export function generateDynamicFallbackAnswer(userQuery: string, category: string): string {
  const q = userQuery.trim();

  return `Core Solution & Key Points:

Question: ${q}

1. Fundamental Concept:
• The system adheres to the standard governing principles of ${category || 'Engineering Science'}.
• Boundary conditions and equilibrium criteria determine the characteristic response across variables.

2. Step-by-Step Point-to-Point Analysis:
• Point 1: Identify all given parameters, boundary conditions, and known constants with SI units.
• Point 2: Apply the governing system equations under standard sign conventions.
• Point 3: Substitute numerical parameters line by line without skipping intermediary algebra.
• Point 4: Validate resulting dimensions and physical feasibility.

3. Final Result & Conclusion:
• Final Answer: The analytical solution satisfies all system boundary constraints.
• Exam Scoring Tip: Write initial assumptions in clear bullet points and enclose your final answer in a neat box to obtain full marks in university examinations.`;
}

export function generateSmartFallbackSummary(
  subjectName: string,
  unitOrChapter: string,
  language: string,
  mode: string,
  providedText?: string
): string {
  const isHinglish = language === 'Hinglish';
  const sName = subjectName || 'Engineering Subject';
  const uName = unitOrChapter || 'Engineering Syllabus Unit';

  if (isHinglish) {
    return `📌 Subject & Topic Overview (Executive Summary):
• Subject: ${sName}
• Unit / Topic: ${uName}
• Target: SPPU In-Sem (30 Marks) & End-Sem (70 Marks) Zero-Point-Loss Revision.

🔑 Master Formula Sheet (Ekdum Crisp Form):
• Formula 1: Primary Output = Input Parameters × System Transfer Coefficient
• Formula 2: Total Energy / State = Σ (Individual Unit Contributions)
• Golden Rule: Har numerical solve karte waqt SI units strictly check karo (e.g., mm ko meters me convert karna).

📝 Step-by-Step Point-to-Point Concepts (Zero Points Missed):
1. Core Definition & Basic Intuition:
• Yeh topic engineering systems ke response aur practical implementation ko quantify karta hai.
• Real-world applications me yeh safety factor aur optimal performance ensure karta hai.
2. Key Working Principles:
• Point 1: Given parameters aur boundary values identify karo.
• Point 2: Core governing equation apply karke step-by-step simplify karo.
• Point 3: Intermediary algebraic steps likho taaki step-marking ke full marks mile.
3. Important Technical Distinctions:
• Direct Analysis vs Numerical Methods: Accuracy, computation time aur convergence criteria.

⚙️ Standard Derivations & Procedural Steps:
• Step 1: System schematic draw karo with proper labeling.
• Step 2: Fundamental conservation laws apply karo.
• Step 3: Integrate/simplify boundary conditions ke saath.
• Final Result: Highlight the boxed final formula.

⚠️ High-Yield 5-8 Marks Exam Questions (SPPU Repeated PYQs):
• Q1: State and derive the fundamental relation for ${uName} with circuit/block diagram. [7 Marks]
• Q2: Explain the step-by-step procedural algorithm with a solved numerical example. [6 Marks]
• Q3: Compare conventional vs modern implementation approaches. [5 Marks]

💡 60-Second Last-Night Memory Booster:
• Exam me diagram clean draw karna + formula box me wrap karna.
• Assumptions points me likhna (bullet points 1 to 4) full 7/7 marks guaranteed!`;
  }

  // Default English Summary
  return `📌 Executive Subject & Unit Overview:
• Subject: ${sName}
• Topic / Chapter: ${uName}
• Syllabus Target: SPPU 2024 NEP Pattern (Comprehensive Zero-Loss Revision)
• Revision Mode: ${mode === 'last-minute' ? 'Last-Night Exam Booster' : mode === 'pyq-high-yield' ? 'High-Yield PYQ Q&A Extractor' : 'Comprehensive Chapter Summary'}

🔑 Master Formula Sheet & Governing Relationships:
• Formula 1: System Characteristic Response = Input Transfer Function × Gain Parameter
• Formula 2: Total Dynamic Output = Σ (Component Contributions) under equilibrium conditions
• Critical Constants & Units: Ensure standard SI unit consistency (e.g. Rad/s, N/m², J/kg·K).
• Golden Rule: Enclose all final numerical solutions and units in a bold box during SPPU written examinations.

📝 Step-by-Step Point-to-Point Key Concepts (Zero Points Missed):
1. Fundamental Governing Law & Definitions:
• Exact technical definition: The system satisfies standard conservation principles across domain boundaries.
• Key physical significance: Governs energy, momentum, or information transfer with minimal dissipation.
2. Structural Operation & Working Methodology:
• Point 1: Establish coordinate system, boundary conditions, and reference nodes clearly.
• Point 2: Apply the primary governing differential/algebraic equations.
• Point 3: Eliminate dependent variables through algebraic substitutions.
• Point 4: Validate physical admissibility (non-negative constraints, causality, stability).
3. Critical Technical Classifications:
• Type A Systems: Linear, time-invariant response with closed-form analytical solutions.
• Type B Systems: Non-linear or lumped-parameter approximations requiring iterative numerical convergence.

⚙️ Standard Derivations & Algorithmic Procedure:
• Step 1: Formulation of the differential element or initial governing equation.
• Step 2: Application of boundary/initial conditions at t = 0 or x = 0.
• Step 3: Analytical integration and algebraic regrouping of characteristic coefficients.
• Step 4: Final canonical expression derived and boxed for maximum examiner clarity.

⚠️ High-Yield 5-8 Marks Questions Frequently Asked in SPPU Exams:
• Q1: State the governing theorem for ${uName} and deduce its analytical expression. [7 Marks]
• Q2: Provide a neat labeled schematic diagram and explain the operational procedure step-by-step. [6 Marks]
• Q3: Solve standard numerical problems evaluating boundary efficiency under rated loads. [7 Marks]

💡 Last-Minute 60-Second Exam Recall Mnemonics:
• Always state all initial assumptions as bullet points before writing mathematical steps.
• Draw circuit/block/system diagrams on the left half and mathematical equations on the right half.
• Enclose final values with explicit SI units to secure 100% step-marking allocation.`;
}
