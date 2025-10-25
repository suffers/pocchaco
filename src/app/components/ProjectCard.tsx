import { GitHubRepo } from '../lib/github';

interface ProjectCardProps {
  repo: GitHubRepo;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="group bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:bg-zinc-900/70">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">
          {repo.name}
        </h3>
        <div className="flex items-center space-x-2 text-sm text-zinc-500">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
        </div>
      </div>
      
      {repo.description && (
        <p className="text-zinc-400 mb-4 leading-relaxed">
          {repo.description}
        </p>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {repo.language && (
            <span className="text-sm text-purple-400 bg-purple-900/30 px-2 py-1 rounded">
              {repo.language}
            </span>
          )}
          <span className="text-sm text-zinc-500">
            Updated {formatDate(repo.updated_at)}
          </span>
        </div>
        
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
        >
          View →
        </a>
      </div>
      
      {repo.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {repo.topics.slice(0, 5).map((topic) => (
            <span
              key={topic}
              className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
