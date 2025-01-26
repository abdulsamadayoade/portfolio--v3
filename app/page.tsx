import Link from "next/link";
import projects, { Project } from "@/db/projects";

export default function Page() {
  return (
    <>
      <section className="mb-10 space-y-10 font-mono text-sm">
        <dl className="space-x-3 justify-between flex items-start text-muted">
          <div className="space-y-1">
            <dt className="sr-only">Name and Role</dt>
            <dd className="text-heading">abdulsamad ayoade</dd>
            <dd className="text-muted">frontend engineer</dd>
          </div>
          <div className="flex flex-col space-y-1">
            <dt className="sr-only">Links</dt>
            <dd>
              <a
                href="/assets/others/Abdulsamad_Ayoade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M15 18a3 3 0 1 0-6 0" />
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                  <circle cx="12" cy="13" r="2" />
                </svg>
                <span>resume</span>
              </a>
            </dd>
            <dd>
              <Link
                href="https://github.com/abdulsamadayoade"
                className="flex items-center space-x-1 hover:text-heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>github</span>
              </Link>
            </dd>
          </div>
        </dl>

        <div className="space-y-4 text-body">
          <p>
            I&apos;m a software engineer who build high quality B2B & B2C apps
            that scale. I take a hands-on approach, enjoying both writing code
            and solving problems while brainstorming ideas and collaborating
            with my team.
          </p>
          <p>
            I currently work at{" "}
            <Link
              href="https://www.reeddi.com"
              target="_blank"
              className="text-muted hover:text-heading underline">
              Reeddi
            </Link>{" "}
            where I build tools that help businesses achieve more while also
            driving internal company initiatives.
          </p>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-muted tracking-tight text-vs uppercase font-mono">
          Explorations
        </h2>

        <dl className="mt-5 space-y-10">
          {projects &&
            projects.length > 0 &&
            projects.map(({ id, name, description }: Project) => (
              <div key={id}>
                <dt className="text-base font-bold text-heading mb-3">
                  {name}{" "}
                  <span className="text-muted ml-2 text-[10px] font-light uppercase tracking-widest">
                    (wip)
                  </span>
                </dt>
                <dd className="font-serif text-base text-body opacity-90">
                  {description}
                </dd>
              </div>
            ))}
        </dl>
      </section>
    </>
  );
}
