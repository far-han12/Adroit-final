import ViewReviewCard from '@/components/ViewReviewCard';
import React from 'react';

const ViewReview = () => {
    return (
        <div  className='my-10 mx-auto max-w-[1170px] grid grid-cols-3 gap-[124px] '>
  <div className=''>
  <ViewReviewCard></ViewReviewCard>
  </div>
  <div className='col-span-2 self-stretch'>
  <div className="container  ">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Introduction</h1>
        <p className="mb-4">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit et. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
        </p>
        <p className="mb-4">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in 
          <span className="underline ">volutpat mollis</span> at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fauce augue enim. Quis at habitant diam at. Suscipit 
          <span className="underline ">tristique risus</span>, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
        </p>
        <blockquote className="border-l-4 border-[#EC632F] pl-4 bold text-gray-600 mb-4">
          <p>
            "In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."
          </p>
        <footer className="mt-2 text-gray-500 bg-transparent">— Olivia Rhye, Product Designer</footer>

        </blockquote>

        <p className="mb-4">
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi 
          <span className="underline ">bibendum diam</span>. Tempor integer aliquam in vitae malesuada fringilla.
        </p>
        <p className="mb-4">
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor 
          <span className="underline ">aliquam</span>. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, eu ut ultrices ac vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
        </p>
        <p className="mb-4">
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Software and tools</h2>
        <p>
          Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Other resources</h2>
        <p className="mb-4">
          Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>
            Lectus id duis vitae porttitor enim <span className="underline ">gravida morbi</span>.
          </li>
          <li>
            Eu turpis <span className="underline ">posuere semper feugiat</span> volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
          </li>
          <li>
            Suspendisse maecenas ac <span className="underline ">donec scelerisque</span> diam sed est duis purus.
          </li>
        </ol>
        <p className="mb-4">
          Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
        </p>
        <p>
          Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
        </p>
      </section>
    </div>
  </div>
        </div>
    );
};

export default ViewReview;