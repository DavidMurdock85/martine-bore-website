import { Typography } from '@mb/components/layout/Typography'
import { ImageAbout } from '@mb/components/ImageAbout'

export const About: React.FC = () => {
  return (
    <>
      <div className="bg-slate-100 border-slate-100 border-2">
        <div className="ml-5 mr-5 mb-5 mt-5 border border-yellow-500">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 m-2">
            <div className="">
              <ImageAbout/>
            </div>

            <div className="">
              <Typography
                className="flex justify-center font-extralight text-slate-700"
                variant="h2"
              >
                A Boré Family Tradition
              </Typography>

              <Typography
                className="ml-4 mt-3 text-slate-700"
                variant="body"
              >
                <span className="text-yellow-700">
                  Martine Boré Antiques Ltd.
                </span>

                is a second generation antique business located in Ambleside
                West Vancouver. The Boré family antique business has been West
                Vancouvers source of antiques and fine art since the mid 1980s.
                The Bore family business continues to bring a European
                sensibility to the the Vancouver collecting community offering a
                wide range of antiques and fine art sourced directly from Europe
                as well as many locally esteemed collections built with love
                over generations by collectors who share their passion fine
                European antiques and art.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
