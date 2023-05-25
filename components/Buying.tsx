import React from 'react'

export const Buying: React.FC = () => {
  return (
    <div className="flex flex-row mt-2 mb-4">
      <div className="flex flex-col">
    
        <h2
          role="heading"
          aria-level={2}
          className="flex flex-row justify-center"
        >
          We&apos;re Buying
        </h2>

        <p role="paragraph" className="flex flex-row m-1 ">
          We are actively looking for fine quality Jewelry, Paintings, Works on
          paper, Fine Silver, Bronze, Crystal, Porcelain, China, Stemware,
          Chandeliers and Furniture. We are particularly interested in works by
          Lalique, Moorcroft, Meissen, Herend, Royal Worcester, Royal Crown
          Derby, Birks, Tiffanys, Waterford, Baccarat, Cartier, as well as fine
          Chinese and Japanese art. We are also interested in acquiring quality
          Canadian and European art.
        </p>

        <h3
          role="heading"
          aria-level={3}
          className="flex flex-row justify-center mt-2"
        >
          How To Get In Touch
        </h3>

        <p role="paragraph" className="flex flex-row m-1">
          If you have a work you would like to sell us we can be reach by phone
          at (604) 912-0292 or email at info@martineboreantiques.com. Send a
          picture of your items along with any relevant information about their
          condition and well get back to you as soon as we are able. If you are
          unable to send a picture feel free to give us a call and we can
          discuss them over the phone.
        </p>
      </div>
    </div>
  )
}
