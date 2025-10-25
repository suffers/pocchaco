import { getRepositories } from '../lib/github';
import ProjectCard from './ProjectCard';

export default async function Projects() {
  const repos = await getRepositories('suffers');
  
  // Filter out forked repos and sort by stars
  const filteredRepos = repos
    .filter(repo => !repo.name.includes('fork') && repo.stargazers_count >= 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 12); // Show top 12 projects

  return (
    <section id="projects" className="py-20 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-12 text-center">
          <span className="text-white">Projects</span>
        </h2>
        
        {filteredRepos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-lg">
              Loading projects from GitHub...
            </p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/suffers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            <span>View all projects on GitHub</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
