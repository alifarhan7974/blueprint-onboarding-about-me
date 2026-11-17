function AboutMe() {
  const projects = [
    {
      title: "Guillotine Dashboard",
      eyebrow: "Fantasy football",
      description:
        "A dashboard for following a Sleeper fantasy football guillotine league—where the lowest-scoring team is eliminated each week.",
      link: "https://github.com/alifarhan7974/guilliotine-dashboard",
    },
    {
      title: "UCSC Autograder Python Client",
      eyebrow: "Open source",
      description:
        "Open-source contributions to the Python client used with UCSC's autograder tooling.",
      link: "https://github.com/alifarhan7974",
    },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-20">
      <header className="border-b border-slate-200 pb-10 text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">About me</p>
        <h1 className="m-0 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Hi, I&apos;m Farhan.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          I&apos;m a third-year Computer Science student interested in software development and building useful projects.
        </p>
        <nav className="mt-7 flex flex-wrap gap-3" aria-label="Page navigation">
          <a className="rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="#projects">View projects</a>
          <a className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="https://github.com/alifarhan7974" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="https://www.linkedin.com/in/farhan-ali-b42740332/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section id="projects" className="scroll-mt-8 py-10 text-left" aria-labelledby="projects-heading">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 id="projects-heading" className="m-0 text-2xl font-bold tracking-tight text-slate-950">Projects</h2>
          <a className="text-sm font-medium text-blue-700 underline-offset-4 hover:underline" href="https://github.com/alifarhan7974" target="_blank" rel="noopener noreferrer">More on GitHub</a>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {projects.map((project) => (
            <article className="py-7 first:pt-6 last:pb-6" key={project.title}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">{project.eyebrow}</p>
              <h3 className="m-0 text-xl font-semibold text-slate-950">{project.title}</h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">{project.description}</p>
              <a className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-left text-sm text-slate-500">
        Find me on <a className="font-medium text-slate-700 underline underline-offset-4 hover:text-blue-700" href="https://github.com/alifarhan7974" target="_blank" rel="noopener noreferrer">GitHub</a> or <a className="font-medium text-slate-700 underline underline-offset-4 hover:text-blue-700" href="https://www.linkedin.com/in/farhan-ali-b42740332/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
      </footer>
    </main>
  );
}

export default AboutMe;
