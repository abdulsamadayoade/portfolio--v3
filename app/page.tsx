import Link from "next/link";
import experiences from "@/db/experiences";
import projects, { Project } from "@/db/projects";

const connectLinks = [
  {
    title: "GitHub",
    href: "/",
  },
  {
    title: "Twitter",
    href: "/",
  },
  {
    title: "LinkedIn",
    href: "/",
  },
];

export default function Page() {
  return (
    <>
      <section>
        <h2 className="text-muted tracking-tight text-vs uppercase font-mono">
          Work Experience
        </h2>

        <div className="mt-5 space-y-10">
          {experiences &&
            experiences.length > 0 &&
            experiences.map(
              ({ id, company, description, duration, projects }) => (
                <div key={id}>
                  <h3 className="flex items-end space-x-3 mb-3">
                    <span className="text-base font-bold text-heading">
                      {company}
                    </span>
                    <span className="text-[10px] pb-[1.5px] font-mono text-muted">
                      {duration.from} {duration.to && `to ${duration.to}`}
                    </span>
                  </h3>
                  <p className="font-serif text-base text-body opacity-90">
                    {description}
                  </p>
                  {projects && projects.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 mt-5">
                      {projects.map(({ name, url }) => (
                        <li
                          key={name}
                          className="relative pl-[1em] before:content before:absolute before:w-[0.5em] before:h-[1px] before:top-3 before:left-0 before:bg-underline">
                          <Link href={url} className="sub-link" target="_blank">
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-muted tracking-tight text-vs uppercase font-mono">
          Projects
        </h2>

        <div className="mt-5 space-y-10">
          {projects &&
            projects.length > 0 &&
            projects.map(({ id, name, description, tools, urls }: Project) => (
              <div key={id}>
                <h3 className="text-base font-bold text-heading mb-3">
                  {name}
                </h3>
                <p className="font-serif text-base text-body opacity-90">
                  {description}
                </p>
                <div className="my-3 flex items-center space-x-2">
                  <p className="text-[10px]  font-medium uppercase text-muted font-mono">
                    Tools:
                  </p>
                  <div className="flex items-center space-x-2"></div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 max-w-[180px]">
                  {Object.entries(urls).map(([key, value]) => (
                    <li
                      key={key}
                      className="relative pl-[1em] before:content before:absolute before:w-[0.5em] before:h-[1px] before:top-3 before:left-0 before:bg-underline">
                      <Link
                        href={value}
                        className="sub-link capitalize"
                        target="_blank">
                        {key}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-muted tracking-tight text-vs uppercase font-mono">
          Connect
        </h2>

        <ul className="grid grid-cols-1 mt-5 sm:grid-cols-2 gap-y-2.5">
          {connectLinks.map(({ title, href }, index) => (
            <li
              key={title}
              className="relative pl-[1em] before:content before:absolute before:w-[0.5em] before:h-[1px] before:top-3 before:left-0 before:bg-underline">
              <Link href={href} target="_blank" className="sub-link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
