import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="">
        <div className="space-y-2 pt-6 pb-4 md:space-y-5">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Una selección de proyectos en los que trabajé en los últimos años. Algunos de ellos son proyectos personales, otros son colaboraciones con amigos o compañeros de trabajo. Todos ellos son ejemplos de mi trabajo y habilidades en el desarrollo web.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
