import { Typography } from '@mb/components/layout/Typography'
import { ImageAbout } from './ImageAbout'

export const About: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 bg-white p-5">
      <div className="flex justify-center">
        <ImageAbout />
      </div>

      <div className="flex flex-col">
        <Typography
          className="flex flex-row mt-5 mb-3 justify-center font-extralight text-yellow-700"
          variant="h2"
        >
          A Boré Family Tradition
        </Typography>

        <Typography className="flex flex-row ml-5 text-slate-700" variant="body">
          Martine Boré Antiques Ltd. is a second generation antique business
          located in Ambleside West Vancouver. The Boré family antique business
          has been West Vancouvers source of antiques and fine art since the mid
          1980s. The Bore family business continues to bring a European
          sensibility to the the Vancouver collecting community offering a wide
          range of antiques and fine art sourced directly from Europe as well as
          many locally esteemed collections built with love over generations by
          collectors who share their passion fine European antiques and art.
        </Typography>
      </div>
    </div>
  )
}
