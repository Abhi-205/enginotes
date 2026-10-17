import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  FolderGit2,
  FileCode,
  Terminal,
  ExternalLink,
  Download,
  Layers,
  ChevronRight,
  BookOpen,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap
} from 'lucide-react';

interface GitHubExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubExportModal: React.FC<GitHubExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'pages' | 'parts' | 'commands' | 'structure'>('pages');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const projectParts = [
    {
      part: 'Part 1: Core Configuration & GitHub Pages Setup',
      files: [
        { path: 'package.json', desc: 'Dependencies, scripts with predeploy & deploy (gh-pages)' },
        { path: 'vite.config.ts', desc: 'Configured with base: "./" to prevent blank page on GitHub Pages' },
        { path: 'public/.nojekyll', desc: 'Disables Jekyll processing so all assets load correctly' },
        { path: 'public/404.html', desc: 'SPA router fallback for GitHub Pages page reloads' },
        { path: '.github/workflows/deploy.yml', desc: 'Automated 1-click GitHub Actions deployment workflow' },
        { path: 'tsconfig.json', desc: 'TypeScript path mappings and JSX configuration' },
        { path: 'index.html', desc: 'HTML entry point with Plus Jakarta Sans & JetBrains Mono' },
        { path: 'README.md', desc: 'Complete GitHub project & deployment documentation' }
      ]
    },
    {
      part: 'Part 2: Data Models & Mock Data',
      files: [
        { path: 'src/types/index.ts', desc: 'Note, User, Branch, Syllabus, and Category types' },
        { path: 'src/data/branchesData.ts', desc: '7 Engineering Branches with 8-semester course syllabi' },
        { path: 'src/data/seedNotes.ts', desc: 'Initial high-yield notes with formulas and preview pages' },
        { path: 'src/data/sppuSyllabusData.ts', desc: 'Official SPPU 2024 syllabus subject units' },
        { path: 'src/data/sppuPyqData.ts', desc: 'Past year university question papers bank' },
        { path: 'src/data/sppuQuizzesData.ts', desc: 'Semester MCQ practice quizzes' }
      ]
    },
    {
      part: 'Part 3: State Management & Offline Engines',
      files: [
        { path: 'src/context/AuthContext.tsx', desc: 'User state, mobile verification, and bookmarks' },
        { path: 'src/context/NotesContext.tsx', desc: 'Filter state, branch/semester filters, and downloads' },
        { path: 'src/utils/aiFallbackEngine.ts', desc: 'Offline solver & summarizer for static GitHub Pages' },
        { path: 'src/utils/fileStorage.ts', desc: 'IndexedDB persistent storage for PDF files' },
        { path: 'src/utils/mobileValidator.ts', desc: 'Strict student 10-digit mobile number validation' }
      ]
    },
    {
      part: 'Part 4: UI Components & Modals',
      files: [
        { path: 'src/components/FrontLoginPage.tsx', desc: 'Mandatory student authentication gate' },
        { path: 'src/components/Navbar.tsx', desc: 'Sticky header with search bar, navigation tabs, and profile' },
        { path: 'src/components/HomeSection.tsx', desc: 'Hero section, instant jump search, and featured notes' },
        { path: 'src/components/BrowseNotesSection.tsx', desc: 'Filterable notes catalog with branch/semester selectors' },
        { path: 'src/components/BranchesSection.tsx', desc: 'Curriculum explorer with semester course units' },
        { path: 'src/components/UploadNotesSection.tsx', desc: 'Contributor publishing studio with live preview' },
        { path: 'src/components/MyAccountSection.tsx', desc: 'Student dashboard with bookmarks and upload history' },
        { path: 'src/components/NotePreviewModal.tsx', desc: 'In-browser multi-page document viewer with zoom & formulas' },
        { path: 'src/components/BrahmastraAiModal.tsx', desc: 'Draggable AI problem solver & revision generator' },
        { path: 'src/components/PdfSummarizerModal.tsx', desc: 'Smart PDF chapter exam summarizer' },
        { path: 'src/components/GitHubExportModal.tsx', desc: 'GitHub upload and Pages deployment instructions' }
      ]
    },
    {
      part: 'Part 5: Application Entry Points',
      files: [
        { path: 'src/App.tsx', desc: 'Root component orchestrating all sections and modals' },
        { path: 'src/main.tsx', desc: 'React 19 root DOM hydration' },
        { path: 'src/index.css', desc: 'Tailwind CSS and custom scrollbars' }
      ]
    }
  ];

  const terminalCommands = `# Step 1: Open your terminal inside your project folder
git init

# Step 2: Add all files
git add .

# Step 3: Create initial commit
git commit -m "Add complete EngiNotes engineering platform with GitHub Pages fix"

# Step 4: Set primary branch to main
git branch -M main

# Step 5: Connect your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# Step 6: Push all files to GitHub
git push -u origin main`;

  const deployGhPagesCmd = `npm run deploy`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center border border-slate-700">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>GitHub Repository & Deployment Guide</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Fixed for GitHub Pages
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Fixes blank white page issue and guides step-by-step deployment to GitHub Pages.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center gap-3 text-xs shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('pages')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'pages'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-sky-400 hover:text-sky-300 bg-sky-500/10 border border-sky-500/20'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>GitHub Pages (Blank Screen Fix)</span>
          </button>
          <button
            onClick={() => setActiveTab('commands')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'commands'
                ? 'bg-slate-800 text-sky-400 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Git CLI Commands</span>
          </button>
          <button
            onClick={() => setActiveTab('parts')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer shrink-0 ${
              activeTab === 'parts'
                ? 'bg-slate-800 text-sky-400 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            File Parts (5 Modules)
          </button>
          <button
            onClick={() => setActiveTab('structure')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer shrink-0 ${
              activeTab === 'structure'
                ? 'bg-slate-800 text-sky-400 border border-sky-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Folder Structure
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'pages' && (
            <div className="space-y-6">
              {/* Problem & Solution banner */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Why it showed a blank white page & How we fixed it:</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed space-y-1 pl-6">
                  <p>
                    <strong>The Cause:</strong> By default, Vite generates asset links starting with a leading slash (<code className="bg-slate-950 px-1 py-0.5 rounded text-amber-300">/assets/...</code>). When hosted on GitHub Pages at <code className="bg-slate-950 px-1 py-0.5 rounded text-sky-300">https://username.github.io/repo/</code>, the browser requests assets from the root domain (<code className="bg-slate-950 px-1 py-0.5 rounded text-rose-300">https://username.github.io/assets/...</code>), which returns a <strong>404 Not Found</strong> and stops React from loading.
                  </p>
                  <p>
                    <strong>The Solution Applied:</strong> We added <code className="bg-slate-950 px-1 py-0.5 rounded text-emerald-300">base: './'</code> in <code className="text-sky-300">vite.config.ts</code> so all assets load with relative paths, added <code className="text-sky-300">public/.nojekyll</code> to disable Jekyll asset filtering, added <code className="text-sky-300">public/404.html</code> for reload routing, and configured client-side offline fallbacks.
                  </p>
                </div>
              </div>

              {/* Deployment Option 1: GitHub Actions (Recommended) */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>Option A: 1-Click Automated Deployment (GitHub Actions)</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          Recommended
                        </span>
                      </h4>
                      <p className="text-xs text-slate-400">Zero configuration needed. GitHub builds and deploys automatically.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pl-2">
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-sky-400">Step 1:</span>
                    <span>Push your code to GitHub (see the <strong>Git CLI Commands</strong> tab).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-sky-400">Step 2:</span>
                    <span>Go to your GitHub repository in your browser and click <strong>Settings</strong> &gt; <strong>Pages</strong> (in left sidebar).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-sky-400">Step 3:</span>
                    <span>Under <strong>Build and deployment &gt; Source</strong>, select <strong>GitHub Actions</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-sky-400">Step 4:</span>
                    <span>The included <code className="bg-slate-900 px-1 py-0.5 rounded text-sky-300">.github/workflows/deploy.yml</code> workflow will automatically build and publish your site with zero blank page issues!</span>
                  </div>
                </div>
              </div>

              {/* Deployment Option 2: 1-Command Deploy */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Option B: One-Command Deploy via <code className="text-indigo-300 font-mono text-xs">npm run deploy</code>
                      </h4>
                      <p className="text-xs text-slate-400">Builds the project and publishes the dist folder directly to your gh-pages branch.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(deployGhPagesCmd, 'deploy-cmd')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    {copiedKey === 'deploy-cmd' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Command</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-emerald-400">
                  {deployGhPagesCmd}
                </div>

                <p className="text-xs text-slate-400 pl-2">
                  After running this command, check GitHub repository <strong>Settings &gt; Pages</strong>: ensure Source is <strong>Deploy from a branch</strong>, branch is <strong>gh-pages</strong>, and folder is <strong>/ (root)</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'parts' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs text-sky-300">
                💡 <strong>Tip for GitHub Web UI:</strong> If you are creating files on github.com (via <em>Add file &gt; Create new file</em>), type the full path (e.g. <code className="bg-slate-950 px-1 py-0.5 rounded text-sky-200">.github/workflows/deploy.yml</code>) into the filename box; GitHub will automatically create the subdirectories for you!
              </div>

              {projectParts.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <span>{group.part}</span>
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {group.files.length} files
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {group.files.map((file) => (
                      <div
                        key={file.path}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="min-w-0 pr-3">
                          <span className="font-mono text-xs font-semibold text-sky-300">
                            {file.path}
                          </span>
                          <p className="text-[11px] text-slate-400 truncate">
                            {file.desc}
                          </p>
                        </div>

                        <button
                          onClick={() => copyToClipboard(file.path, file.path)}
                          className="shrink-0 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1"
                          title="Copy file path"
                        >
                          {copiedKey === file.path ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'commands' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Run these commands in your project terminal to push everything to your GitHub repository:
                </span>
                <button
                  onClick={() => copyToClipboard(terminalCommands, 'cmd')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {copiedKey === 'cmd' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Commands</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto">
                <pre className="text-xs font-mono text-emerald-400 leading-relaxed">
                  {terminalCommands}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'structure' && (
            <div className="space-y-3">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl overflow-x-auto">
                <pre className="text-xs font-mono text-slate-300 leading-relaxed">
{`├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── .nojekyll
│   └── 404.html
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── index.ts
    ├── data/
    │   ├── branchesData.ts
    │   ├── seedNotes.ts
    │   ├── sppuSyllabusData.ts
    │   ├── sppuPyqData.ts
    │   └── sppuQuizzesData.ts
    ├── context/
    │   ├── AuthContext.tsx
    │   └── NotesContext.tsx
    ├── utils/
    │   ├── aiFallbackEngine.ts
    │   ├── fileStorage.ts
    │   └── mobileValidator.ts
    └── components/
        ├── FrontLoginPage.tsx
        ├── Navbar.tsx
        ├── HomeSection.tsx
        ├── BrowseNotesSection.tsx
        ├── BranchesSection.tsx
        ├── UploadNotesSection.tsx
        ├── MyAccountSection.tsx
        ├── NotePreviewModal.tsx
        ├── BrahmastraAiModal.tsx
        ├── PdfSummarizerModal.tsx
        ├── GitHubExportModal.tsx
        └── Footer.tsx`}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>All files are configured and verified for GitHub Pages</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
