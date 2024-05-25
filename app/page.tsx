import Link from "next/link";

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
  {
    title: "Read.cv",
    href: "/",
  },
];

export default function Page() {
  return (
    <>
      <div>
        <div>
          <h2 className="text-[rgba(129,130,141,1)] uppercase text-[10.5px] tracking-[2px] font-mono">
            Work Experience
          </h2>
        </div>

        <div className="my-10 projects">
          <h2 className="text-[rgba(129,130,141,1)] mb-6 uppercase text-[10.5px] tracking-[2px] font-mono">
            Projects
          </h2>

          <div className="space-y-12">
            <div>
              <div>
                <h3>PollUp</h3>
                <p className="text-base title">
                  A full-stack web application that allows users to create and
                  participate in polls.
                </p>
              </div>

              <div className="my-5 flex items-center space-x-2">
                <h2 className="text-[rgba(129,130,141,1)] uppercase text-[9px] tracking-[2px] font-mono">
                  Tools:
                </h2>
                <div className="flex tools items-center space-x-2 text-[10px] uppercase">
                  <p>NextJS</p>
                  <p>TailwindCSS</p>
                  <p>Redux</p>
                  <p>NodeJS</p>
                  <p>Express</p>
                  <p>MongoDB</p>
                  <p>Vercel</p>
                  <p>AWS</p>
                </div>
              </div>

              <ul>
                <li>
                  <a href="/">Live URL</a>
                </li>
                <li>
                  <a href="/">Github</a>
                </li>
              </ul>
            </div>

            <div>
              <div>
                <h3>Houda</h3>
                <p className="text-base title">
                  Mobile app that helps users to improve their knowledge of
                  islam by providing sermons and preachings from different
                  scholars.
                </p>
              </div>

              <div className="my-5 flex items-center space-x-2">
                <h2 className="text-[rgba(129,130,141,1)] uppercase text-[9px] tracking-[2px] font-mono">
                  Tools:
                </h2>
                <div className="flex tools items-center space-x-2 text-[10px] uppercase">
                  <p>React Native</p>
                  <p>Expo</p>
                  <p>Zustand</p>
                  <p>NestJS</p>
                  <p>Postgres</p>
                  <p>Vercel</p>
                  <p>Railway</p>
                </div>
              </div>

              <ul>
                <li>
                  <a href="/">Live URL</a>
                </li>
                <li>
                  <a href="/">Github</a>
                </li>
              </ul>
            </div>

            <div>
              <div>
                <h3>Yahaya Muhammad</h3>
                <p className="text-base title">
                  A simple portfolio website for a product designer
                </p>
              </div>

              <div className="my-5 flex items-center space-x-2">
                <h2 className="text-[rgba(129,130,141,1)] uppercase text-[9px] tracking-[2px] font-mono">
                  Tools:
                </h2>
                <div className="flex tools items-center space-x-2 text-[10px] uppercase">
                  <p>NextJS</p>
                  <p>CSS Modules</p>
                  <p>GSAP</p>
                  <p>Cloudinary</p>
                </div>
              </div>

              <ul>
                <li>
                  <a href="/">Live URL</a>
                </li>
                <li>
                  <a href="/">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h2 className="text-[rgba(129,130,141,1)] uppercase text-[10.5px] tracking-[2px] font-mono">
            Connect
          </h2>
          <p className="text-[15px] mt-2 mb-5 text-[rgba(218,219,225,1)]">
            You can always find me here:
          </p>

          <ul>
            {connectLinks.map(({ title, href }, index) => (
              <li key={index}>
                <Link href={href} target="_blank">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
