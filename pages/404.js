import Link from '@/components/Link'
import Image from '@/components/Image'
export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
      <div>
        <Image
          src="/static/images/error404_rc.png"
          alt="error 404"
          width="500"
          height="500"
        />
      </div>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          404: Lo sentimos, no pudimos encontrar esta página.
        </p>
        <p className="mb-8">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página principal.</p>
        <Link href="/">
          <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
            Volver a la página principal
          </button>
        </Link>
      </div>
    </div>
  )
}
